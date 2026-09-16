# SvgStreamEvent1

## Example Usage

```typescript
import { SvgStreamEvent1 } from "@quiverai/sdk/sdk/models/shared";

let value: SvgStreamEvent1 = {
  data: {
    code: "request_timeout",
    message: "<value>",
    requestId: "<id>",
    status: 886719,
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