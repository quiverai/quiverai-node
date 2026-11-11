const assert = require("node:assert/strict");
const { test } = require("node:test");
const { QuiverAI } = require("../dist/commonjs/index.js");
const { EventStream } = require("../dist/commonjs/lib/event-streams.js");
const { mockClient, svgResponse } = require("./helpers.cjs");

const request = { generateSVGRequest: { model: "arrow-2", prompt: "a red circle" } };

test("generateSVG posts a snake_case body and parses the response", async () => {
  const { httpClient, requests } = mockClient({ body: svgResponse });
  const quiver = new QuiverAI({ bearerAuth: "k", httpClient });

  const { result } = await quiver.createSVGs.generateSVG({
    generateSVGRequest: { ...request.generateSVGRequest, maxOutputTokens: 64 },
    xTraceId: "trace_1",
  });

  const sent = requests[0];
  assert.equal(sent.method, "POST");
  assert.equal(new URL(sent.url).pathname, "/v1/svgs/generations");
  assert.equal(sent.headers.get("x-trace-id"), "trace_1");
  assert.deepEqual(await sent.json(), {
    model: "arrow-2",
    prompt: "a red circle",
    max_output_tokens: 64,
    n: 1,
    stream: false,
  });

  assert.ok("data" in result);
  assert.equal(result.data[0].mimeType, "image/svg+xml");
  assert.match(result.data[0].svg, /^<svg/);
});

test("documented API errors resolve with the error envelope", async () => {
  const { httpClient } = mockClient({
    status: 401,
    body: { code: "invalid_api_key", message: "Invalid API key", request_id: "req_1", status: 401 },
  });
  const quiver = new QuiverAI({ bearerAuth: "k", httpClient });

  const { result } = await quiver.createSVGs.generateSVG(request);

  assert.deepEqual(result, {
    code: "invalid_api_key",
    message: "Invalid API key",
    requestId: "req_1",
    status: 401,
  });
});

test("stream: true yields typed server-sent events until [DONE]", async () => {
  const sse = [
    `event: generating\ndata: ${JSON.stringify({ type: "generating", id: "out_1", index: 0 })}\n\n`,
    `event: some_future_event\ndata: {"anything":true}\n\n`,
    `event: content\ndata: ${JSON.stringify({ type: "content", id: "out_1", index: 0, svg: "<svg/>" })}\n\n`,
    `data: [DONE]\n\n`,
  ].join("");
  const { httpClient } = mockClient({ body: sse, contentType: "text/event-stream" });
  const quiver = new QuiverAI({ bearerAuth: "k", httpClient });

  const { result } = await quiver.createSVGs.generateSVG({
    generateSVGRequest: { ...request.generateSVGRequest, stream: true },
  });

  assert.ok(result instanceof EventStream);
  const events = [];
  for await (const event of result) events.push(event.event);
  assert.deepEqual(events, ["generating", "UNKNOWN", "content"]);
});
