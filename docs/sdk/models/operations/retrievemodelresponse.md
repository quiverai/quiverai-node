# RetrieveModelResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  code: "invalid_api_key",
  message: "Invalid API key provided",
  param: "api_key",
  type: "invalid_request_error",
};
```

### `shared.Model`

```typescript
const value: shared.Model = {
  contextLength: 128000,
  created: 1704067200,
  description: "Optimized for high-quality icon and illustration generation",
  id: "arrow-0.5",
  inputModalities: [
    "text",
    "image",
  ],
  maxOutputLength: 16384,
  name: "Arrow 0.5",
  outputModalities: [
    "svg",
  ],
  pricing: {
    completion: "0.000002",
    image: "0",
    inputCacheReads: "0",
    inputCacheWrites: "0",
    prompt: "0.000001",
    request: "0",
  },
  supportedOperations: [
    "svg_generate",
    "svg_edit",
    "svg_animate",
    "svg_collections",
    "chat_completions",
  ],
  supportedSamplingParameters: [
    "temperature",
    "top_p",
    "stop",
    "seed",
  ],
  svgCapabilities: {
    maxComplexity: 4,
    recommendedViewboxSizes: [
      24,
      48,
      64,
      128,
      256,
      512,
    ],
    supportedModes: [
      "icon",
      "illustration",
      "logo",
    ],
    supportedStyles: [
      "flat",
      "outline",
      "duotone",
      "gradient",
    ],
  },
};
```

