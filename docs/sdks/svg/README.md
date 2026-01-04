# Svg

## Overview

Operations for generating and editing SVG graphics

### Available Operations

* [checkVectorizability](#checkvectorizability) - Check image vectorizability
* [createSVGAnimation](#createsvganimation) - Animate SVGs
* [createSVGCollection](#createsvgcollection) - Generate SVG collections
* [createSVGEdit](#createsvgedit) - Edit SVGs
* [createSVGGeneration](#createsvggeneration) - Generate SVGs
* [createSVGVectorization](#createsvgvectorization) - Vectorize image to SVG

## checkVectorizability

Analyzes an image and returns whether it is suitable for vectorization.
Use this for pre-flight validation before calling the vectorize endpoint.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="CheckVectorizability" method="post" path="/svg/vectorize/check" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.svg.checkVectorizability({
    image: {
      url: "https://example.com/uploads/reference1.png",
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
import { svgCheckVectorizability } from "@quiverai/sdk/funcs/svgCheckVectorizability.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await svgCheckVectorizability(quiverAI, {
    image: {
      url: "https://example.com/uploads/reference1.png",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("svgCheckVectorizability failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.VectorizabilityCheckRequest](../../sdk/models/shared/vectorizabilitycheckrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CheckVectorizabilityResponse](../../sdk/models/operations/checkvectorizabilityresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createSVGAnimation

Adds CSS animations to an existing SVG graphic based on a motion prompt.
The source SVG can be provided as an inline string or URL.
Supports streaming for real-time progressive rendering.

When `stream` is set to `true`, the response will be sent as Server-Sent
Events (SSE) with partial SVG updates followed by a final completion event.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateSVGAnimation" method="post" path="/svg/animate" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.svg.createSVGAnimation({
    duration: 3,
    easing: "ease-in-out",
    input: {
      motionPrompt: "Make the icon pulse and rotate slowly",
      source: "{\"svg_url\":\"https://example.com/icon.svg\"}",
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
import { svgCreateSVGAnimation } from "@quiverai/sdk/funcs/svgCreateSVGAnimation.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await svgCreateSVGAnimation(quiverAI, {
    duration: 3,
    easing: "ease-in-out",
    input: {
      motionPrompt: "Make the icon pulse and rotate slowly",
      source: "{\"svg_url\":\"https://example.com/icon.svg\"}",
    },
    model: "arrow-0.5",
    stream: true,
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("svgCreateSVGAnimation failed:", res.error);
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

**Promise\<[operations.CreateSVGAnimationResponse](../../sdk/models/operations/createsvganimationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createSVGCollection

Generates an icon set from a single descriptive prompt. The model will
interpret the prompt to create multiple coherent, related SVGs.

Example prompt: "create an icon set with home, web, computer, and settings icons"

Supports streaming for real-time progressive rendering.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateSVGCollection" method="post" path="/svg/collections" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.svg.createSVGCollection({
    input: {
      prompt: "Create an icon set with home, settings, user, and search icons",
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
import { svgCreateSVGCollection } from "@quiverai/sdk/funcs/svgCreateSVGCollection.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await svgCreateSVGCollection(quiverAI, {
    input: {
      prompt: "Create an icon set with home, settings, user, and search icons",
    },
    model: "arrow-0.5",
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("svgCreateSVGCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CollectionSVGRequest](../../sdk/models/shared/collectionsvgrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSVGCollectionResponse](../../sdk/models/operations/createsvgcollectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createSVGEdit

Edits an existing SVG graphic based on a text prompt and optional
reference images. The source SVG can be provided as an inline string
or URL. Supports streaming for real-time progressive rendering.

When `stream` is set to `true`, the response will be sent as Server-Sent
Events (SSE) with partial SVG updates followed by a final completion event.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateSVGEdit" method="post" path="/svg/edits" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.svg.createSVGEdit({
    input: {
      prompt: "Make the unicorn more colorful",
      source: "{\"svg\":\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\">...</svg>\"}",
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
import { svgCreateSVGEdit } from "@quiverai/sdk/funcs/svgCreateSVGEdit.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await svgCreateSVGEdit(quiverAI, {
    input: {
      prompt: "Make the unicorn more colorful",
      source: "{\"svg\":\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\">...</svg>\"}",
    },
    model: "arrow-0.5",
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("svgCreateSVGEdit failed:", res.error);
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

**Promise\<[operations.CreateSVGEditResponse](../../sdk/models/operations/createsvgeditresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createSVGGeneration

Generates one or more SVG graphics based on a text prompt and optional
reference images. Supports streaming for real-time progressive rendering.

When `stream` is set to `true`, the response will be sent as Server-Sent
Events (SSE) with partial SVG updates followed by a final completion event.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateSVGGeneration" method="post" path="/svg/generate" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.svg.createSVGGeneration({
    frequencyPenalty: 0,
    input: {
      instructions: "Create a minimal, modern icon",
      prompt: "Generate an icon of a unicorn",
      references: [
        {
          url: "https://example.com/uploads/source1.png",
        },
      ],
    },
    maxOutputTokens: 2560,
    model: "arrow-0.5",
    n: 2,
    presencePenalty: 0,
    stream: true,
    svgParams: {
      canvas: {
        aspectRatio: "1:1",
        safeZone: {
          mode: "relative",
          overrides: {
            bottom: 0.15,
          },
          value: 0.1,
        },
        viewBox: {
          height: 24,
          width: 24,
        },
      },
      design: {
        colors: {
          adherence: "tints_and_shades",
          allowOpacity: true,
          maxColors: 4,
          palette: [
            "#12FBA2",
            "#1A1A1A",
            "#FFFFFF",
          ],
          roles: {
            accent: [
              "#12FBA2",
            ],
            background: [
              "#FFFFFF",
            ],
            primary: [
              "#1A1A1A",
            ],
          },
          useGradients: false,
        },
        complexity: 2,
        fillRule: "nonzero",
        includeBackground: false,
        linecap: "round",
        linejoin: "round",
        strokeWidth: 1.5,
        stylePreset: "outline",
      },
      mode: "icon",
    },
    temperature: 0.8,
    topP: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { svgCreateSVGGeneration } from "@quiverai/sdk/funcs/svgCreateSVGGeneration.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await svgCreateSVGGeneration(quiverAI, {
    frequencyPenalty: 0,
    input: {
      instructions: "Create a minimal, modern icon",
      prompt: "Generate an icon of a unicorn",
      references: [
        {
          url: "https://example.com/uploads/source1.png",
        },
      ],
    },
    maxOutputTokens: 2560,
    model: "arrow-0.5",
    n: 2,
    presencePenalty: 0,
    stream: true,
    svgParams: {
      canvas: {
        aspectRatio: "1:1",
        safeZone: {
          mode: "relative",
          overrides: {
            bottom: 0.15,
          },
          value: 0.1,
        },
        viewBox: {
          height: 24,
          width: 24,
        },
      },
      design: {
        colors: {
          adherence: "tints_and_shades",
          allowOpacity: true,
          maxColors: 4,
          palette: [
            "#12FBA2",
            "#1A1A1A",
            "#FFFFFF",
          ],
          roles: {
            accent: [
              "#12FBA2",
            ],
            background: [
              "#FFFFFF",
            ],
            primary: [
              "#1A1A1A",
            ],
          },
          useGradients: false,
        },
        complexity: 2,
        fillRule: "nonzero",
        includeBackground: false,
        linecap: "round",
        linejoin: "round",
        strokeWidth: 1.5,
        stylePreset: "outline",
      },
      mode: "icon",
    },
    temperature: 0.8,
    topP: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("svgCreateSVGGeneration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.QuiverMessage](../../sdk/models/shared/quivermessage.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSVGGenerationResponse](../../sdk/models/operations/createsvggenerationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createSVGVectorization

Converts a raster image (PNG, JPEG, WebP) into an SVG graphic.
Requires exactly one input image. Supports streaming for real-time
progressive rendering.

When `stream` is set to `true`, the response uses a two-phase streaming model:

1. **Draft phase** (`svg_vectorize.draft` events): Raw SVG chunks are streamed
   in real-time as the model generates them. These provide immediate visual
   feedback but may not be fully optimized.

2. **Content phase** (`svg_vectorize.content` event): After the draft is complete,
   a refined and optimized SVG is sent as the final result with usage statistics.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateSVGVectorization" method="post" path="/svg/vectorize" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.svg.createSVGVectorization({
    input: {
      image: {
        url: "https://example.com/logo.png",
      },
    },
    model: "arrow-0.5",
    simplifyIfNeeded: true,
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
import { svgCreateSVGVectorization } from "@quiverai/sdk/funcs/svgCreateSVGVectorization.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await svgCreateSVGVectorization(quiverAI, {
    input: {
      image: {
        url: "https://example.com/logo.png",
      },
    },
    model: "arrow-0.5",
    simplifyIfNeeded: true,
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("svgCreateSVGVectorization failed:", res.error);
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

**Promise\<[operations.CreateSVGVectorizationResponse](../../sdk/models/operations/createsvgvectorizationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |