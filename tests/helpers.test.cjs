const assert = require("node:assert/strict");
const { test } = require("node:test");
const { QuiverAI } = require("../dist/commonjs/index.js");
const {
  APIError,
  collectSVGs,
  imageSource,
  isAPIError,
  svgSource,
  unwrap,
} = require("../dist/commonjs/helpers.js");
const { mockClient, svgResponse } = require("./helpers.cjs");

const request = { generateSVGRequest: { model: "arrow-2", prompt: "a red circle" } };
const errorBody = {
  code: "insufficient_credits",
  message: "Not enough credits",
  request_id: "req_1",
  retry_after: 30,
  status: 402,
};
const sse = (event, data) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;

function client(mock) {
  return new QuiverAI({ bearerAuth: "k", httpClient: mockClient(mock).httpClient });
}

test("unwrap returns the result of a successful call", async () => {
  const quiver = client({ body: svgResponse });

  const result = unwrap(await quiver.createSVGs.generateSVG(request));

  assert.equal(result.id, "svg_123");
});

test("unwrap throws an APIError carrying the envelope fields", async () => {
  const quiver = client({ status: 402, body: errorBody });
  const response = await quiver.createSVGs.generateSVG(request);

  assert.equal(isAPIError(response.result), true);
  assert.throws(() => unwrap(response), (err) => {
    assert.ok(err instanceof APIError);
    assert.equal(err.message, "Not enough credits");
    assert.equal(err.code, "insufficient_credits");
    assert.equal(err.status, 402);
    assert.equal(err.requestId, "req_1");
    assert.equal(err.retryAfter, 30);
    return true;
  });
});

test("isAPIError rejects successful results", () => {
  assert.equal(isAPIError({ id: "svg_1", created: 1, data: [] }), false);
  assert.equal(isAPIError(null), false);
});

test("collectSVGs returns markup for a regular response", async () => {
  const quiver = client({ body: svgResponse });

  const svgs = await collectSVGs(quiver.createSVGs.generateSVG(request));

  assert.deepEqual(svgs, [svgResponse.data[0].svg]);
});

test("collectSVGs rejects with an APIError for an error response", async () => {
  const quiver = client({ status: 402, body: errorBody });

  await assert.rejects(
    collectSVGs(quiver.createSVGs.generateSVG(request)),
    (err) => err instanceof APIError && err.code === "insufficient_credits",
  );
});

test("collectSVGs drains a stream and orders interleaved outputs by index", async () => {
  const body = [
    sse("generating", { type: "generating", id: "b", index: 1 }),
    sse("draft", { type: "draft", id: "b", index: 1, svg: "<svg" }),
    sse("content", { type: "content", id: "b", index: 1, svg: "<svg>b</svg>" }),
    sse("content", { type: "content", id: "a", index: 0, svg: "<svg>a</svg>" }),
    "data: [DONE]\n\n",
  ].join("");
  const quiver = client({ body, contentType: "text/event-stream" });
  const seen = [];

  const svgs = await collectSVGs(
    quiver.createSVGs.generateSVG({
      generateSVGRequest: { ...request.generateSVGRequest, n: 2, stream: true },
    }),
    { onEvent: (event) => seen.push(event.event) },
  );

  assert.deepEqual(svgs, ["<svg>a</svg>", "<svg>b</svg>"]);
  assert.deepEqual(seen, ["generating", "draft", "content", "content"]);
});

test("collectSVGs rejects when the stream reports an error event", async () => {
  const body = [
    sse("generating", { type: "generating", id: "a", index: 0 }),
    sse("error", {
      type: "error",
      code: "model_error",
      message: "Generation failed",
      request_id: "req_2",
      status: 500,
    }),
    "data: [DONE]\n\n",
  ].join("");
  const quiver = client({ body, contentType: "text/event-stream" });

  await assert.rejects(
    collectSVGs(quiver.createSVGs.generateSVG(request)),
    (err) => err instanceof APIError && err.code === "model_error" && err.requestId === "req_2",
  );
});

test("svgSource accepts a URL or raw markup", () => {
  assert.deepEqual(svgSource("https://example.com/a.svg"), { url: "https://example.com/a.svg" });
  assert.deepEqual(svgSource("<svg/>"), { base64: Buffer.from("<svg/>").toString("base64") });
});

test("imageSource accepts a URL, a data URL or bytes", () => {
  const bytes = new Uint8Array([137, 80, 78, 71]);
  const base64 = Buffer.from(bytes).toString("base64");

  assert.deepEqual(imageSource("https://example.com/a.png"), { url: "https://example.com/a.png" });
  assert.deepEqual(imageSource(`data:image/png;base64,${base64}`), { base64 });
  assert.deepEqual(imageSource(bytes), { base64 });
  assert.deepEqual(imageSource(bytes.buffer), { base64 });
  assert.throws(() => imageSource("not-a-url"), TypeError);
});
