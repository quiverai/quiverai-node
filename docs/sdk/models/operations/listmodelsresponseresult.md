# ListModelsResponseResult


## Supported Types

### `shared.ListModelsResponse`

```typescript
const value: shared.ListModelsResponse = {
  data: [
    {
      created: 840036,
      id: "<id>",
      object: "model",
      ownedBy: "<value>",
      pricing: {
        svgGenerate: "0.30",
        svgVectorize: "0.30",
      },
    },
  ],
  object: "list",
};
```

### `shared.PublicErrorEnvelope`

```typescript
const value: shared.PublicErrorEnvelope = {
  code: "weekly_limit_exceeded",
  message: "<value>",
  requestId: "<id>",
  status: 474294,
};
```

