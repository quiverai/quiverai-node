# GenerateSVGResponse


## Supported Types

### `shared.PublicErrorEnvelope`

```typescript
const value: shared.PublicErrorEnvelope = {
  code: "insufficient_credits",
  message: "<value>",
  requestId: "<id>",
  status: 474294,
};
```

### `shared.SvgResponse`

```typescript
const value: shared.SvgResponse = {
  created: 1704067200,
  data: [],
  id: "resp_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

### `EventStream<shared.SvgStreamEvent>`

