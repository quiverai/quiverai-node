# One

## Example Usage

```typescript
import { One } from "@quiverai/sdk/sdk/models/shared";

let value: One = {
  data: {
    code: "payload_too_large",
    message: "<value>",
    requestId: "<id>",
    status: 23530,
    type: "error",
  },
  event: "error",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [shared.PublicErrorSseEventData](../../../sdk/models/shared/publicerrorsseeventdata.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `event`                                                                                 | *"error"*                                                                               | :heavy_check_mark:                                                                      | The SSE event name (sent via the `event:` line).                                        |
| `id`                                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional SSE event id (sent via the `id:` line).                                        |
| `retry`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | Optional SSE retry value in milliseconds (sent via the `retry:` line).                  |