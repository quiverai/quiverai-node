# ListModelsResponse

## Example Usage

```typescript
import { ListModelsResponse } from "@quiverai/sdk/sdk/models/operations";

let value: ListModelsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `headers`                             | Record<string, *string*[]>            | :heavy_check_mark:                    | N/A                                   |
| `result`                              | *operations.ListModelsResponseResult* | :heavy_check_mark:                    | N/A                                   |