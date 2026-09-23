# EditSVG

## Overview

### Available Operations

* [editSVG](#editsvg) - SVG edit

## editSVG

Edits an input SVG from inline SVG markup or a remote/base64 SVG source.

### Example Usage: inline

<!-- UsageSnippet language="typescript" operationID="editSVG" method="post" path="/v1/svgs/edits" example="inline" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.editSVG.editSVG({
    editSVGRequest: {
      maxReviewSteps: 2,
      model: "arrow-2",
      prompt: "Make the star bolder and simplify the outline",
      stream: false,
      svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z\"/></svg>",
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
import { editSVGEditSVG } from "@quiverai/sdk/funcs/editSVGEditSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await editSVGEditSVG(quiverAI, {
    editSVGRequest: {
      maxReviewSteps: 2,
      model: "arrow-2",
      prompt: "Make the star bolder and simplify the outline",
      stream: false,
      svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z\"/></svg>",
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("editSVGEditSVG failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_request

<!-- UsageSnippet language="typescript" operationID="editSVG" method="post" path="/v1/svgs/edits" example="invalid_request" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.editSVG.editSVG({
    editSVGRequest: {
      maxReviewSteps: 2,
      model: "El Camino",
      prompt: "Make the mark bolder and simplify the star points.",
      reasoningEffort: "medium",
      referenceImages: [
        {
          base64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        },
      ],
      settings: {
        maxOutputTokens: 4096,
        orchestratorMaxOutputTokens: 4096,
        shallowMaxOutputTokens: 2048,
        temperature: 0.4,
      },
      stream: false,
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
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
import { editSVGEditSVG } from "@quiverai/sdk/funcs/editSVGEditSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await editSVGEditSVG(quiverAI, {
    editSVGRequest: {
      maxReviewSteps: 2,
      model: "El Camino",
      prompt: "Make the mark bolder and simplify the star points.",
      reasoningEffort: "medium",
      referenceImages: [
        {
          base64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        },
      ],
      settings: {
        maxOutputTokens: 4096,
        orchestratorMaxOutputTokens: 4096,
        shallowMaxOutputTokens: 2048,
        temperature: 0.4,
      },
      stream: false,
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("editSVGEditSVG failed:", res.error);
  }
}

run();
```
### Example Usage: stream

<!-- UsageSnippet language="typescript" operationID="editSVG" method="post" path="/v1/svgs/edits" example="stream" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.editSVG.editSVG({
    editSVGRequest: {
      maxReviewSteps: 2,
      model: "arrow-2",
      prompt: "Make the mark feel more geometric",
      stream: true,
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
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
import { editSVGEditSVG } from "@quiverai/sdk/funcs/editSVGEditSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await editSVGEditSVG(quiverAI, {
    editSVGRequest: {
      maxReviewSteps: 2,
      model: "arrow-2",
      prompt: "Make the mark feel more geometric",
      stream: true,
      svgSource: {
        url: "https://example.com/uploads/source.svg",
      },
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("editSVGEditSVG failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditSVGRequest](../../sdk/models/operations/editsvgrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EditSVGResponse](../../sdk/models/operations/editsvgresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |