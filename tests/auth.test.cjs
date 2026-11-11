const assert = require("node:assert/strict");
const { afterEach, beforeEach, test } = require("node:test");
const { QuiverAI } = require("../dist/commonjs/index.js");
const { mockClient } = require("./helpers.cjs");

const ENV = "QUIVERAI_API_KEY";
let saved;

beforeEach(() => {
  saved = process.env[ENV];
  delete process.env[ENV];
});

afterEach(() => {
  if (saved === undefined) delete process.env[ENV];
  else process.env[ENV] = saved;
});

const listBody = { body: { data: [], object: "list" } };

test("falls back to QUIVERAI_API_KEY when bearerAuth is not set", async () => {
  process.env[ENV] = "env-key";
  const { httpClient, requests } = mockClient(listBody);

  await new QuiverAI({ httpClient }).models.listModels();

  assert.equal(requests[0].headers.get("authorization"), "Bearer env-key");
});

test("an explicit bearerAuth wins over the environment", async () => {
  process.env[ENV] = "env-key";
  const { httpClient, requests } = mockClient(listBody);

  await new QuiverAI({ bearerAuth: "explicit-key", httpClient }).models.listModels();

  assert.equal(requests[0].headers.get("authorization"), "Bearer explicit-key");
});

test("an async bearerAuth provider wins over the environment", async () => {
  process.env[ENV] = "env-key";
  const { httpClient, requests } = mockClient(listBody);

  await new QuiverAI({ bearerAuth: async () => "provider-key", httpClient })
    .models.listModels();

  assert.equal(requests[0].headers.get("authorization"), "Bearer provider-key");
});

test("a per-request Authorization header wins over the environment", async () => {
  process.env[ENV] = "env-key";
  const { httpClient, requests } = mockClient(listBody);

  await new QuiverAI({ httpClient }).models.listModels({
    headers: { Authorization: "Bearer per-request" },
  });

  assert.equal(requests[0].headers.get("authorization"), "Bearer per-request");
});

test("sends no Authorization header when no key is available", async () => {
  const { httpClient, requests } = mockClient(listBody);

  await new QuiverAI({ httpClient }).models.listModels();

  assert.equal(requests[0].headers.get("authorization"), null);
});
