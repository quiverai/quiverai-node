# Two

## Example Usage

```typescript
import { Two } from "@quiverai/sdk/sdk/models/shared";

let value: Two = {
  data: {
    type: "generating",
  },
  event: "generating",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | *shared.SvgStreamEventData*                                            | :heavy_check_mark:                                                     | The event payload. Shape depends on the `type` phase discriminator.    |
| `event`                                                                | *"generating"*                                                         | :heavy_check_mark:                                                     | The SSE event name (sent via the `event:` line).                       |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Optional SSE event id (sent via the `id:` line).                       |
| `retry`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Optional SSE retry value in milliseconds (sent via the `retry:` line). |