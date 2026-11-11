# QuiverAI TypeScript SDK

The official TypeScript SDK for the [QuiverAI API](https://docs.quiver.ai): generate, edit, animate and vectorize SVGs.

[![npm](https://img.shields.io/npm/v/@quiverai/sdk)](https://www.npmjs.com/package/@quiverai/sdk)

<!-- Start Summary [summary] -->
## Summary

QuiverAI API: The QuiverAI API enables developers to generate and edit SVG graphics using AI, with support for streaming responses and model discovery.
<!-- End Summary [summary] -->

## Quickstart

```bash
npm add @quiverai/sdk
export QUIVERAI_API_KEY="<your-key>" # create one at https://platform.quiver.ai/api-keys
```

```typescript
import { writeFile } from "node:fs/promises";
import { QuiverAI } from "@quiverai/sdk";
import { collectSVGs } from "@quiverai/sdk/helpers";

// Reads QUIVERAI_API_KEY from the environment.
// Pass `bearerAuth` to set the key explicitly.
const quiver = new QuiverAI();

const [svg] = await collectSVGs(
  quiver.createSVGs.generateSVG({
    generateSVGRequest: {
      model: "arrow-2",
      prompt: "A minimalist paper plane icon, single colour",
    },
  }),
);

await writeFile("plane.svg", svg!);
```

Runnable versions of these snippets live in [`examples/`](./examples).

### Helpers

`@quiverai/sdk/helpers` wraps the parts of the generated client that take the
most code to use correctly.

| Helper | What it does |
| --- | --- |
| `collectSVGs(call, { onEvent? })` | Resolves a generate, edit, animate or vectorize call to the final SVG markup, one string per output. Handles both regular and `stream: true` responses. |
| `unwrap(response)` | Returns `response.result`, throwing an `APIError` if it is an error envelope. |
| `isAPIError(result)` | Type guard for the error envelope, if you prefer not to throw. |
| `APIError` | Error with `code`, `status`, `requestId`, `param` and `retryAfter`. |
| `svgSource(svg)` | Builds `svgSource` for edit and animate from raw markup or a URL. |
| `imageSource(image)` | Builds an image reference from a URL, a base64 data URL or raw bytes. |

### Streaming

Set `stream: true` to receive server-sent events while the SVG is generated.
`collectSVGs` drains the stream, reports each event to `onEvent`, and resolves
with the final markup:

```typescript
const svgs = await collectSVGs(
  quiver.createSVGs.generateSVG({
    generateSVGRequest: {
      model: "arrow-2",
      prompt: "A minimalist paper plane icon, single colour",
      stream: true,
    },
  }),
  {
    onEvent: (event) => {
      if (event.event === "draft" && event.data.type === "draft") {
        console.log(`draft: ${event.data.svg.length} chars`);
      }
    },
  },
);
```

To consume the stream yourself, `unwrap` the response and iterate it when it is
an `EventStream` (exported from `@quiverai/sdk/lib/event-streams.js`).

### Editing and vectorizing

```typescript
import { readFile } from "node:fs/promises";
import { collectSVGs, imageSource, svgSource } from "@quiverai/sdk/helpers";

const [edited] = await collectSVGs(
  quiver.editSVG.editSVG({
    editSVGRequest: {
      model: "arrow-2",
      prompt: "Change the fill colour to deep blue",
      svgSource: svgSource(await readFile("logo.svg", "utf8")),
    },
  }),
);

const [vectorized] = await collectSVGs(
  quiver.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      model: "arrow-2",
      image: imageSource(await readFile("logo.png")),
    },
  }),
);
```

### Handling API errors

Every method resolves with `{ headers, result }`. For the error statuses the API
documents (`4xx` and `5xx`), the promise **resolves** and `result` is the error
envelope. It is not thrown, so a `try`/`catch` around the raw call will not see
it. `unwrap` and `collectSVGs` turn the envelope into a thrown `APIError`:

```typescript
import { APIError, unwrap } from "@quiverai/sdk/helpers";

try {
  const model = unwrap(await quiver.models.getModel({ model: "does-not-exist" }));
  console.log(model.id);
} catch (err) {
  if (err instanceof APIError) {
    console.error(err.status, err.code, err.message, err.requestId);
  } else {
    throw err;
  }
}
```

Without the helpers, check the result yourself with `"code" in result` or
`isAPIError(result)`.

Other exceptions are thrown for failures that never produce a documented API
response: network errors, timeouts, aborted requests, undocumented status codes
(`SDKError`) and responses that do not match the expected shape
(`ResponseValidationError`). Those are described under
[Error Handling](#error-handling).

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [openapi](#openapi)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @quiverai/sdk
```

### PNPM

```bash
pnpm add @quiverai/sdk
```

### Bun

```bash
bun add @quiverai/sdk
```

### Yarn

```bash
yarn add @quiverai/sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-0.5",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      |
| ------------ | ---- | ----------- |
| `bearerAuth` | http | HTTP Bearer |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-0.5",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [AnimateSVG](docs/sdks/animatesvg/README.md)

* [animateSVG](docs/sdks/animatesvg/README.md#animatesvg) - SVG animation

### [CreateSVGs](docs/sdks/createsvgs/README.md)

* [generateSVG](docs/sdks/createsvgs/README.md#generatesvg) - Text to SVG

### [EditSVG](docs/sdks/editsvg/README.md)

* [editSVG](docs/sdks/editsvg/README.md#editsvg) - SVG edit

### [Models](docs/sdks/models/README.md)

* [getModel](docs/sdks/models/README.md#getmodel) - Get Model
* [listModels](docs/sdks/models/README.md#listmodels) - List Models

### [Organization](docs/sdks/organization/README.md)

* [getOrganizationBalance](docs/sdks/organization/README.md#getorganizationbalance) - Get Organization Balance

### [VectorizeSVG](docs/sdks/vectorizesvg/README.md)

* [vectorizeSVG](docs/sdks/vectorizesvg/README.md#vectorizesvg) - Image to SVG

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`animateSVGAnimateSVG`](docs/sdks/animatesvg/README.md#animatesvg) - SVG animation
- [`createSVGsGenerateSVG`](docs/sdks/createsvgs/README.md#generatesvg) - Text to SVG
- [`editSVGEditSVG`](docs/sdks/editsvg/README.md#editsvg) - SVG edit
- [`modelsGetModel`](docs/sdks/models/README.md#getmodel) - Get Model
- [`modelsListModels`](docs/sdks/models/README.md#listmodels) - List Models
- [`organizationGetOrganizationBalance`](docs/sdks/organization/README.md#getorganizationbalance) - Get Organization Balance
- [`vectorizeSVGVectorizeSVG`](docs/sdks/vectorizesvg/README.md#vectorizesvg) - Image to SVG

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.animateSVG.animateSVG({
    animateSVGRequest: {
      model: "arrow-2",
      prompt: "Add a gentle pulsing animation to the triangle",
      svgSource: {
        base64:
          "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJsOCAyMEg0eiIvPjwvc3ZnPg==",
      },
      temperature: 0.4,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });

  console.log(result);
}

run();

```

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-0.5",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-0.5",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`QuiverAiError`](./src/sdk/models/errors/quiveraierror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { QuiverAI } from "@quiverai/sdk";
import * as errors from "@quiverai/sdk/sdk/models/errors";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await quiverAI.models.getModel({
      model: "arrow-0.5",
    });

    console.log(result);
  } catch (error) {
    if (error instanceof errors.QuiverAiError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`QuiverAiError`](./src/sdk/models/errors/quiveraierror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`QuiverAiError`](./src/sdk/models/errors/quiveraierror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  serverURL: "https://api.quiver.ai",
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-0.5",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { QuiverAI } from "@quiverai/sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@quiverai/sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new QuiverAI({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { QuiverAI } from "@quiverai/sdk";

const sdk = new QuiverAI({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript)
