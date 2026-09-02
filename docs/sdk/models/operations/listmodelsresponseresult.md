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
      pricingCredits: {
        svgGenerate: 30,
        svgVectorize: 30,
      },
    },
  ],
  object: "list",
};
```

### `shared.PublicErrorEnvelope`

```typescript
const value: shared.PublicErrorEnvelope = {
  code: "content_policy_violation",
  message: "<value>",
  requestId: "<id>",
  status: 474294,
};
```

