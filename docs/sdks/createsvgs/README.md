# CreateSVGs

## Overview

Generate SVG graphics from text prompts and reference images.

### Available Operations

* [generateSVG](#generatesvg) - Text to SVG

## generateSVG

Generates one or more SVGs from a prompt and optional references.

### Example Usage: all-params

<!-- UsageSnippet language="typescript" operationID="generateSVG" method="post" path="/v1/svgs/generations" example="all-params" -->
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
### Example Usage: allParams

<!-- UsageSnippet language="typescript" operationID="generateSVG" method="post" path="/v1/svgs/generations" example="allParams" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    instructions: "Use a flat monochrome style with rounded corners and clean geometry.",
    maxOutputTokens: 4096,
    model: "arrow-preview",
    n: 2,
    presencePenalty: 0.2,
    prompt: "Generate a minimalist unicorn icon for a SaaS dashboard",
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
    instructions: "Use a flat monochrome style with rounded corners and clean geometry.",
    maxOutputTokens: 4096,
    model: "arrow-preview",
    n: 2,
    presencePenalty: 0.2,
    prompt: "Generate a minimalist unicorn icon for a SaaS dashboard",
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

<!-- UsageSnippet language="typescript" operationID="generateSVG" method="post" path="/v1/svgs/generations" example="basic" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.createSVGs.generateSVG({
    model: "arrow-preview",
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
    model: "arrow-preview",
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

<!-- UsageSnippet language="typescript" operationID="generateSVG" method="post" path="/v1/svgs/generations" example="invalid-prompt" -->
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

<!-- UsageSnippet language="typescript" operationID="generateSVG" method="post" path="/v1/svgs/generations" example="multiple" -->
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

<!-- UsageSnippet language="typescript" operationID="generateSVG" method="post" path="/v1/svgs/generations" example="single" -->
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

<!-- UsageSnippet language="typescript" operationID="generateSVG" method="post" path="/v1/svgs/generations" example="streaming" -->
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