# FixedCreditModelBilling

## Example Usage

```typescript
import { FixedCreditModelBilling } from "@quiverai/sdk/sdk/models/shared";

let value: FixedCreditModelBilling = {
  kind: "fixed_credit",
  unit: "credits_per_output",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `kind`                                                                      | *"fixed_credit"*                                                            | :heavy_check_mark:                                                          | N/A                                                                         |
| `unit`                                                                      | [shared.Unit](../../../sdk/models/shared/unit.md)                           | :heavy_check_mark:                                                          | Operation-specific `pricing_credits` are debited once per generated output. |