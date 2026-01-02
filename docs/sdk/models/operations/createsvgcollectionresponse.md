# CreateSVGCollectionResponse


## Supported Types

### `shared.CollectionResponse`

```typescript
const value: shared.CollectionResponse = {
  created: 1704067200,
  items: [
    {
      mimeType: "image/svg+xml",
      svg:
        "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">...</svg>",
    },
  ],
  usage: {
    inputTokens: 256,
    inputTokensDetails: {
      imageTokens: 128,
      svgTokens: 128,
      textTokens: 128,
    },
    outputTokens: 768,
    outputTokensDetails: {
      svgTokens: 768,
    },
    totalTokens: 1024,
  },
};
```

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  code: "invalid_api_key",
  message: "Invalid API key provided",
  param: "api_key",
  type: "invalid_request_error",
};
```

### `EventStream<shared.SVGStreamEvent>`

