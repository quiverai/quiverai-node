# ModifySVGs

## Overview

Edit or animate existing SVG graphics

### Available Operations

* [animateSVG](#animatesvg) - Animate SVGs
* [editSVG](#editsvg) - Edit SVGs

## animateSVG

Adds CSS animations to an existing SVG graphic based on a motion prompt.
The source SVG can be provided as an inline string or URL.
Supports streaming for real-time progressive rendering.

**NOTE: This endpoint is currently not implemented.**

When `stream` is set to `true`, the response will be sent as Server-Sent
Events (SSE) with partial SVG updates followed by a final completion event.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="animateSVG" method="post" path="/v1/svgs/animations" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.modifySVGs.animateSVG({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modifySVGsAnimateSVG } from "@quiverai/sdk/funcs/modifySVGsAnimateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modifySVGsAnimateSVG(quiverAI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modifySVGsAnimateSVG failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.AnimateSVGRequest](../../sdk/models/shared/animatesvgrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnimateSVGResponse](../../sdk/models/operations/animatesvgresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## editSVG

Edits an existing SVG graphic based on a text prompt and optional
reference images. The source SVG can be provided as an inline string
or URL. Supports streaming for real-time progressive rendering.

**NOTE: This endpoint is currently not implemented.**

When `stream` is set to `true`, the response will be sent as Server-Sent
Events (SSE) with partial SVG updates followed by a final completion event.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="editSVG" method="post" path="/v1/svgs/edits" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.modifySVGs.editSVG({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modifySVGsEditSVG } from "@quiverai/sdk/funcs/modifySVGsEditSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modifySVGsEditSVG(quiverAI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modifySVGsEditSVG failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.EditSVGRequest](../../sdk/models/shared/editsvgrequest.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EditSVGResponse](../../sdk/models/operations/editsvgresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |