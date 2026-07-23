# PublicErrorSseEventData

## Example Usage

```typescript
import { PublicErrorSseEventData } from "@quiverai/sdk/sdk/models/shared";

let value: PublicErrorSseEventData = {
  code: "server_error",
  message: "<value>",
  requestId: "<id>",
  status: 603625,
  type: "error",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `code`                                                                                          | [shared.PublicErrorSseEventDataCode](../../../sdk/models/shared/publicerrorsseeventdatacode.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `message`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `requestId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `status`                                                                                        | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `type`                                                                                          | [shared.Type](../../../sdk/models/shared/type.md)                                               | :heavy_check_mark:                                                                              | N/A                                                                                             |