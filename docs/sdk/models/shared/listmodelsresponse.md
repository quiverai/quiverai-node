# ListModelsResponse

## Example Usage

```typescript
import { ListModelsResponse } from "@quiverai/sdk/sdk/models/shared";

let value: ListModelsResponse = {
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
        svgAnimate: 25,
        svgEdit: 20,
        svgGenerate: 30,
        svgVectorize: 30,
      },
    },
  ],
  object: "list",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Model](../../../sdk/models/shared/model.md)[]   | :heavy_check_mark:                                      | N/A                                                     |
| `object`                                                | [shared.ObjectT](../../../sdk/models/shared/objectt.md) | :heavy_check_mark:                                      | N/A                                                     |