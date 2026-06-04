# VectorizeSVG

## Overview

Convert raster image inputs into SVG outputs.

### Available Operations

* [vectorizeSVG](#vectorizesvg) - Image to SVG

## vectorizeSVG

Converts an image input into an SVG output.

### Example Usage: all-params

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="all-params" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/photo.jpg",
      },
      maxOutputTokens: 4096,
      model: "arrow-0.5",
      temperature: 0.3,
      topP: 0.9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/photo.jpg",
      },
      maxOutputTokens: 4096,
      model: "arrow-0.5",
      temperature: 0.3,
      topP: 0.9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="basic" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/logo.png",
      },
      model: "arrow-1.1",
      temperature: 0.8,
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
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/logo.png",
      },
      model: "arrow-1.1",
      temperature: 0.8,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: contentEvent

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="contentEvent" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      attributes: {
        viewBox: {
          height: 512,
          minX: 0,
          minY: 0,
          width: 512,
        },
      },
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/reference1.png",
      },
      maxOutputTokens: 4096,
      model: "arrow-preview",
      presencePenalty: 0.2,
      targetSize: 1024,
      temperature: 0.4,
      topP: 0.95,
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
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      attributes: {
        viewBox: {
          height: 512,
          minX: 0,
          minY: 0,
          width: 512,
        },
      },
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/reference1.png",
      },
      maxOutputTokens: 4096,
      model: "arrow-preview",
      presencePenalty: 0.2,
      targetSize: 1024,
      temperature: 0.4,
      topP: 0.95,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: draftEvent

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="draftEvent" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      attributes: {
        viewBox: {
          height: 512,
          minX: 0,
          minY: 0,
          width: 512,
        },
      },
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/reference1.png",
      },
      maxOutputTokens: 4096,
      model: "arrow-preview",
      presencePenalty: 0.2,
      targetSize: 1024,
      temperature: 0.4,
      topP: 0.95,
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
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      attributes: {
        viewBox: {
          height: 512,
          minX: 0,
          minY: 0,
          width: 512,
        },
      },
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/reference1.png",
      },
      maxOutputTokens: 4096,
      model: "arrow-preview",
      presencePenalty: 0.2,
      targetSize: 1024,
      temperature: 0.4,
      topP: 0.95,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: invalid-image

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="invalid-image" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      image: {
        url: "https://example.com/logo.png",
      },
      model: "arrow-0.5",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      image: {
        url: "https://example.com/logo.png",
      },
      model: "arrow-0.5",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: multiple

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="multiple" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      image: {
        url: "https://example.com/logo.png",
      },
      model: "arrow-0.5",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      image: {
        url: "https://example.com/logo.png",
      },
      model: "arrow-0.5",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: single

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="single" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      image: {
        url: "https://example.com/logo.png",
      },
      model: "arrow-0.5",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      image: {
        url: "https://example.com/logo.png",
      },
      model: "arrow-0.5",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: stream

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="stream" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/logo.png",
      },
      model: "arrow-1.1",
      presencePenalty: 0.2,
      stream: true,
      temperature: 0.4,
      topP: 0.95,
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
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/uploads/logo.png",
      },
      model: "arrow-1.1",
      presencePenalty: 0.2,
      stream: true,
      temperature: 0.4,
      topP: 0.95,
    },
    xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: streaming

<!-- UsageSnippet language="typescript" operationID="vectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="streaming" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.vectorizeSVG.vectorizeSVG({
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/photo.jpg",
      },
      model: "arrow-0.5",
      stream: true,
      temperature: 0.8,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { vectorizeSVGVectorizeSVG } from "@quiverai/sdk/funcs/vectorizeSVGVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await vectorizeSVGVectorizeSVG(quiverAI, {
    vectorizeSVGRequest: {
      autoCrop: true,
      image: {
        url: "https://example.com/photo.jpg",
      },
      model: "arrow-0.5",
      stream: true,
      temperature: 0.8,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vectorizeSVGVectorizeSVG failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VectorizeSVGRequest](../../sdk/models/operations/vectorizesvgrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VectorizeSVGResponse](../../sdk/models/operations/vectorizesvgresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |