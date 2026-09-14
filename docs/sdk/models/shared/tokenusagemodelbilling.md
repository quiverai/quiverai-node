# TokenUsageModelBilling

## Example Usage

```typescript
import { TokenUsageModelBilling } from "@quiverai/sdk/sdk/models/shared";

let value: TokenUsageModelBilling = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `currency`                                                                                    | [shared.Currency](../../../sdk/models/shared/currency.md)                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | *"token_usage"*                                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pricingModel`                                                                                | [shared.PricingModel](../../../sdk/models/shared/pricingmodel.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rates`                                                                                       | [shared.Rates](../../../sdk/models/shared/rates.md)                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unit`                                                                                        | [shared.TokenUsageModelBillingUnit](../../../sdk/models/shared/tokenusagemodelbillingunit.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |