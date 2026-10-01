# GetOrganizationBalanceResponse

## Example Usage

```typescript
import { GetOrganizationBalanceResponse } from "@quiverai/sdk/sdk/models/operations";

let value: GetOrganizationBalanceResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    availableCredits: 239.91,
    object: "organization.balance",
    observedAt: 317720,
    organizationId: "<id>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `headers`                                         | Record<string, *string*[]>                        | :heavy_check_mark:                                | N/A                                               |
| `result`                                          | *operations.GetOrganizationBalanceResponseResult* | :heavy_check_mark:                                | N/A                                               |