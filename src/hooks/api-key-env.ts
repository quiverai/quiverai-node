import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

/** Environment variable read when no `bearerAuth` option is passed. */
export const API_KEY_ENV_VAR = "QUIVERAI_API_KEY";

function readEnv(name: string): string | undefined {
  // `process` is not available in browsers and some edge runtimes.
  const proc = (globalThis as {
    process?: { env?: Record<string, string | undefined> };
  }).process;
  return proc?.env?.[name] || undefined;
}

/**
 * Falls back to the `QUIVERAI_API_KEY` environment variable when the client
 * was constructed without `bearerAuth`. An explicitly configured key, or an
 * `Authorization` header set per request, always wins.
 */
export class ApiKeyEnvHook implements BeforeRequestHook {
  beforeRequest(_hookCtx: BeforeRequestContext, request: Request): Request {
    if (request.headers.has("Authorization")) {
      return request;
    }

    const apiKey = readEnv(API_KEY_ENV_VAR);
    if (!apiKey) {
      return request;
    }

    request.headers.set(
      "Authorization",
      apiKey.slice(0, 7).toLowerCase() === "bearer "
        ? apiKey
        : `Bearer ${apiKey}`,
    );
    return request;
  }
}
