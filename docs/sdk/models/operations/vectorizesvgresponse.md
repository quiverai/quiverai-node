# VectorizeSVGResponse


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

### `shared.SVGResponse`

```typescript
const value: shared.SVGResponse = {
  created: 1704067200,
  data: [],
  id: "svg-abc123",
  usage: {
    inputTokens: 256,
    outputTokens: 768,
    totalTokens: 1024,
  },
};
```

### `EventStream<shared.SVGStreamEvent>`

