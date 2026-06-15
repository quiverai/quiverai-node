# PublicErrorEnvelope

## Example Usage

```typescript
import { PublicErrorEnvelope } from "@quiverai/sdk/sdk/models/shared";

let value: PublicErrorEnvelope = {
  code: "model_not_found",
  message: "<value>",
  requestId: "<id>",
  status: 474294,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `code`                                            | [shared.Code](../../../sdk/models/shared/code.md) | :heavy_check_mark:                                | N/A                                               |
| `message`                                         | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `requestId`                                       | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `status`                                          | *number*                                          | :heavy_check_mark:                                | N/A                                               |