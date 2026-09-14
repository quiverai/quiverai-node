# ListModelsResponseResult


## Supported Types

### `shared.ListModelsResponse`

```typescript
const value: shared.ListModelsResponse = {
  data: [
    {
      billing: {
        currency: "USD",
        kind: "token_usage",
        pricingModel: "token_usage_v1",
        rates: {
          cacheWrite: 73184,
          cachedInput: 488710,
          input: 420022,
          output: 198579,
        },
        unit: "millicents_per_million_tokens",
      },
      created: 60319,
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

