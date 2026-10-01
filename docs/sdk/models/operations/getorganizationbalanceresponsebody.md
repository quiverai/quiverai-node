# GetOrganizationBalanceResponseBody

Spendable organization credit balance

## Example Usage

```typescript
import { GetOrganizationBalanceResponseBody } from "@quiverai/sdk/sdk/models/operations";

let value: GetOrganizationBalanceResponseBody = {
  availableCredits: 2358.06,
  object: "organization.balance",
  observedAt: 650348,
  organizationId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `availableCredits`                                              | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `object`                                                        | [operations.ObjectT](../../../sdk/models/operations/objectt.md) | :heavy_check_mark:                                              | N/A                                                             |
| `observedAt`                                                    | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `organizationId`                                                | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |