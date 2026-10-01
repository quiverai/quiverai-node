# Models

## Overview

Operations for listing and retrieving available models.

### Available Operations

* [getModel](#getmodel) - Get Model
* [listModels](#listmodels) - List Models

## getModel

Returns metadata for a single model.

### Example Usage: animationSvgSourceInvalid

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="animationSvgSourceInvalid" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: animationSvgSourceTooLarge

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="animationSvgSourceTooLarge" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: animationSvgSourceUnsupported

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="animationSvgSourceUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="default" -->
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

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-0.5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRequestBody

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="invalidRequestBody" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRequestImage

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="invalidRequestImage" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_request

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="invalid_request" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: maxOutputTokensExceeded

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="maxOutputTokensExceeded" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: modelAnimationUnsupported

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="modelAnimationUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: modelOperationUnsupported

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="modelOperationUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: previousResponseIdUnsupported

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="previousResponseIdUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: reasoningStateUnavailable

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="reasoningStateUnavailable" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: referenceImagePayloadEmpty

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="referenceImagePayloadEmpty" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: referenceImagePayloadNotBase64

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="referenceImagePayloadNotBase64" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: referenceImagePayloadTooLarge

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="referenceImagePayloadTooLarge" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```
### Example Usage: tooManyReferenceImages

<!-- UsageSnippet language="typescript" operationID="getModel" method="get" path="/v1/models/{model}" example="tooManyReferenceImages" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.getModel({
    model: "arrow-2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsGetModel } from "@quiverai/sdk/funcs/modelsGetModel.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsGetModel(quiverAI, {
    model: "arrow-2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsGetModel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetModelRequest](../../sdk/models/operations/getmodelrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetModelResponse](../../sdk/models/operations/getmodelresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listModels

Returns all models available to the authenticated organization.

### Example Usage: animationSvgSourceInvalid

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="animationSvgSourceInvalid" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: animationSvgSourceTooLarge

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="animationSvgSourceTooLarge" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: animationSvgSourceUnsupported

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="animationSvgSourceUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="default" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: invalid-api-key

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="invalid-api-key" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRequestBody

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="invalidRequestBody" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRequestImage

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="invalidRequestImage" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_request

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="invalid_request" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: maxOutputTokensExceeded

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="maxOutputTokensExceeded" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: modelAnimationUnsupported

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="modelAnimationUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: modelOperationUnsupported

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="modelOperationUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: previousResponseIdUnsupported

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="previousResponseIdUnsupported" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: reasoningStateUnavailable

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="reasoningStateUnavailable" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: referenceImagePayloadEmpty

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="referenceImagePayloadEmpty" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: referenceImagePayloadNotBase64

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="referenceImagePayloadNotBase64" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: referenceImagePayloadTooLarge

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="referenceImagePayloadTooLarge" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```
### Example Usage: tooManyReferenceImages

<!-- UsageSnippet language="typescript" operationID="listModels" method="get" path="/v1/models" example="tooManyReferenceImages" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { modelsListModels } from "@quiverai/sdk/funcs/modelsListModels.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await modelsListModels(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("modelsListModels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListModelsResponse](../../sdk/models/operations/listmodelsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |