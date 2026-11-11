const { HTTPClient } = require("../dist/commonjs/index.js");

/**
 * Builds an HTTPClient that never touches the network. It records every
 * outgoing Request and answers with the given canned response.
 */
function mockClient({ status = 200, body = {}, contentType = "application/json" } = {}) {
  const requests = [];
  const httpClient = new HTTPClient({
    fetcher: async (input, init) => {
      requests.push(input instanceof Request ? input : new Request(input, init));
      return new Response(
        typeof body === "string" ? body : JSON.stringify(body),
        { status, headers: { "content-type": contentType } },
      );
    },
  });
  return { httpClient, requests };
}

const svgResponse = {
  id: "svg_123",
  created: 1700000000,
  data: [{ mime_type: "image/svg+xml", svg: "<svg xmlns=\"http://www.w3.org/2000/svg\"/>" }],
};

module.exports = { mockClient, svgResponse };
