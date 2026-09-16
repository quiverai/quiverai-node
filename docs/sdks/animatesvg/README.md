# AnimateSVG

## Overview

Animate SVG inputs from SVG source references.

### Available Operations

* [animateSVG](#animatesvg) - SVG animation

## animateSVG

Animates an input SVG from a remote or base64-encoded SVG source.

### Example Usage: base64

<!-- UsageSnippet language="typescript" operationID="animateSVG" method="post" path="/v1/svgs/animations" example="base64" -->
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
        base64: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJsOCAyMEg0eiIvPjwvc3ZnPg==",
      },
      temperature: 0.4,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { animateSVGAnimateSVG } from "@quiverai/sdk/funcs/animateSVGAnimateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await animateSVGAnimateSVG(quiverAI, {
    animateSVGRequest: {
      model: "arrow-2",
      prompt: "Add a gentle pulsing animation to the triangle",
      svgSource: {
        base64: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJsOCAyMEg0eiIvPjwvc3ZnPg==",
      },
      temperature: 0.4,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("animateSVGAnimateSVG failed:", res.error);
  }
}

run();
```
### Example Usage: contentEvent

<!-- UsageSnippet language="typescript" operationID="animateSVG" method="post" path="/v1/svgs/animations" example="contentEvent" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.animateSVG.animateSVG({
    animateSVGRequest: {
      maxOutputTokens: 4096,
      model: "Mercielago",
      prompt: "Make the logo pulse gently",
      reasoningEffort: "medium",
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
      temperature: 0.4,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { animateSVGAnimateSVG } from "@quiverai/sdk/funcs/animateSVGAnimateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await animateSVGAnimateSVG(quiverAI, {
    animateSVGRequest: {
      maxOutputTokens: 4096,
      model: "Mercielago",
      prompt: "Make the logo pulse gently",
      reasoningEffort: "medium",
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
      temperature: 0.4,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("animateSVGAnimateSVG failed:", res.error);
  }
}

run();
```
### Example Usage: draftEvent

<!-- UsageSnippet language="typescript" operationID="animateSVG" method="post" path="/v1/svgs/animations" example="draftEvent" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.animateSVG.animateSVG({
    animateSVGRequest: {
      maxOutputTokens: 4096,
      model: "Mercielago",
      prompt: "Make the logo pulse gently",
      reasoningEffort: "medium",
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
      temperature: 0.4,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { animateSVGAnimateSVG } from "@quiverai/sdk/funcs/animateSVGAnimateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await animateSVGAnimateSVG(quiverAI, {
    animateSVGRequest: {
      maxOutputTokens: 4096,
      model: "Mercielago",
      prompt: "Make the logo pulse gently",
      reasoningEffort: "medium",
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
      temperature: 0.4,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("animateSVGAnimateSVG failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AnimateSVGRequest](../../sdk/models/operations/animatesvgrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnimateSVGResponse](../../sdk/models/operations/animatesvgresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |