# CreateSVGs

## Overview

Generate SVG graphics from text prompts, reference images, or raster images

### Available Operations

* [generateSVG](#generatesvg) - Text to SVG
* [vectorizeSVG](#vectorizesvg) - Image to SVG

## generateSVG

Generates one or more SVG graphics based on a text prompt and optional
reference images. Supports streaming for real-time progressive rendering.

When `stream` is set to `true`, the response will be sent as Server-Sent
Events (SSE) with partial SVG updates followed by a final completion event.


### Example Usage: all-params

<!-- UsageSnippet language="typescript" operationID="GenerateSVG" method="post" path="/v1/svgs/generations" example="all-params" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    instructions: "Use a flat monochrome style with rounded corners and clean geometry. Avoid gradients. Return only SVG markup.",
    maxOutputTokens: 4096,
    model: "arrow-0.5",
    n: 2,
    presencePenalty: 0.2,
    prompt: "Generate a minimalist unicorn icon for a SaaS dashboard",
    references: [
      {
        url: "https://example.com/uploads/reference-style.png",
      },
      {
        base64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
      },
    ],
    temperature: 0.4,
    topP: 0.95,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsGenerateSVG } from "@quiverai/sdk/funcs/createSVGsGenerateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsGenerateSVG(quiverAI, {
    instructions: "Use a flat monochrome style with rounded corners and clean geometry. Avoid gradients. Return only SVG markup.",
    maxOutputTokens: 4096,
    model: "arrow-0.5",
    n: 2,
    presencePenalty: 0.2,
    prompt: "Generate a minimalist unicorn icon for a SaaS dashboard",
    references: [
      {
        url: "https://example.com/uploads/reference-style.png",
      },
      {
        base64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
      },
    ],
    temperature: 0.4,
    topP: 0.95,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsGenerateSVG failed:", res.error);
  }
}

run();
```
### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="GenerateSVG" method="post" path="/v1/svgs/generations" example="basic" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
    temperature: 0.8,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsGenerateSVG } from "@quiverai/sdk/funcs/createSVGsGenerateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsGenerateSVG(quiverAI, {
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsGenerateSVG failed:", res.error);
  }
}

run();
```
### Example Usage: invalid-prompt

<!-- UsageSnippet language="typescript" operationID="GenerateSVG" method="post" path="/v1/svgs/generations" example="invalid-prompt" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsGenerateSVG } from "@quiverai/sdk/funcs/createSVGsGenerateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsGenerateSVG(quiverAI, {
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsGenerateSVG failed:", res.error);
  }
}

run();
```
### Example Usage: multiple

<!-- UsageSnippet language="typescript" operationID="GenerateSVG" method="post" path="/v1/svgs/generations" example="multiple" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsGenerateSVG } from "@quiverai/sdk/funcs/createSVGsGenerateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsGenerateSVG(quiverAI, {
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsGenerateSVG failed:", res.error);
  }
}

run();
```
### Example Usage: single

<!-- UsageSnippet language="typescript" operationID="GenerateSVG" method="post" path="/v1/svgs/generations" example="single" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsGenerateSVG } from "@quiverai/sdk/funcs/createSVGsGenerateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsGenerateSVG(quiverAI, {
    model: "arrow-0.5",
    prompt: "Generate an icon of a unicorn",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsGenerateSVG failed:", res.error);
  }
}

run();
```
### Example Usage: streaming

<!-- UsageSnippet language="typescript" operationID="GenerateSVG" method="post" path="/v1/svgs/generations" example="streaming" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    instructions: "Create a minimal, modern icon",
    maxOutputTokens: 2560,
    model: "arrow-0.5",
    n: 2,
    prompt: "Generate an icon of a unicorn",
    references: [
      {
        url: "https://example.com/uploads/source1.png",
      },
    ],
    stream: true,
    temperature: 0.8,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsGenerateSVG } from "@quiverai/sdk/funcs/createSVGsGenerateSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsGenerateSVG(quiverAI, {
    instructions: "Create a minimal, modern icon",
    maxOutputTokens: 2560,
    model: "arrow-0.5",
    n: 2,
    prompt: "Generate an icon of a unicorn",
    references: [
      {
        url: "https://example.com/uploads/source1.png",
      },
    ],
    stream: true,
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsGenerateSVG failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.GenerateSVGRequest](../../sdk/models/shared/generatesvgrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateSVGResponse](../../sdk/models/operations/generatesvgresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## vectorizeSVG

Converts a raster image (PNG, JPEG, WebP) into an SVG graphic.
Requires exactly one input image. Supports streaming for real-time
progressive rendering.

When `stream` is set to `true`, the response uses a two-phase streaming model:

1. **Draft phase** (`draft` events): Raw SVG chunks are streamed
   in real-time as the model generates them. These provide immediate visual
   feedback but may not be fully optimized.

2. **Content phase** (`content` event): After the draft is complete,
   a refined and optimized SVG is sent as the final result with usage statistics.


### Example Usage: all-params

<!-- UsageSnippet language="typescript" operationID="VectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="all-params" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.vectorizeSVG({
    autoCrop: true,
    image: {
      url: "https://example.com/photo.jpg",
    },
    maxOutputTokens: 4096,
    model: "arrow-0.5",
    n: 2,
    temperature: 0.3,
    topP: 0.9,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsVectorizeSVG } from "@quiverai/sdk/funcs/createSVGsVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsVectorizeSVG(quiverAI, {
    autoCrop: true,
    image: {
      url: "https://example.com/photo.jpg",
    },
    maxOutputTokens: 4096,
    model: "arrow-0.5",
    n: 2,
    temperature: 0.3,
    topP: 0.9,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="VectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="basic" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.vectorizeSVG({
    autoCrop: true,
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
    temperature: 0.8,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsVectorizeSVG } from "@quiverai/sdk/funcs/createSVGsVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsVectorizeSVG(quiverAI, {
    autoCrop: true,
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: invalid-image

<!-- UsageSnippet language="typescript" operationID="VectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="invalid-image" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.vectorizeSVG({
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsVectorizeSVG } from "@quiverai/sdk/funcs/createSVGsVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsVectorizeSVG(quiverAI, {
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: multiple

<!-- UsageSnippet language="typescript" operationID="VectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="multiple" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.vectorizeSVG({
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsVectorizeSVG } from "@quiverai/sdk/funcs/createSVGsVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsVectorizeSVG(quiverAI, {
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: single

<!-- UsageSnippet language="typescript" operationID="VectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="single" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.vectorizeSVG({
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsVectorizeSVG } from "@quiverai/sdk/funcs/createSVGsVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsVectorizeSVG(quiverAI, {
    image: {
      url: "https://example.com/logo.png",
    },
    model: "arrow-0.5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsVectorizeSVG failed:", res.error);
  }
}

run();
```
### Example Usage: streaming

<!-- UsageSnippet language="typescript" operationID="VectorizeSVG" method="post" path="/v1/svgs/vectorizations" example="streaming" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.vectorizeSVG({
    autoCrop: true,
    image: {
      url: "https://example.com/photo.jpg",
    },
    model: "arrow-0.5",
    stream: true,
    temperature: 0.8,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { createSVGsVectorizeSVG } from "@quiverai/sdk/funcs/createSVGsVectorizeSVG.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await createSVGsVectorizeSVG(quiverAI, {
    autoCrop: true,
    image: {
      url: "https://example.com/photo.jpg",
    },
    model: "arrow-0.5",
    stream: true,
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("createSVGsVectorizeSVG failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.VectorizeSVGRequest](../../sdk/models/shared/vectorizesvgrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VectorizeSVGResponse](../../sdk/models/operations/vectorizesvgresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |