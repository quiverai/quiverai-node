# Five

## Example Usage

```typescript
import { Five } from "@quiverai/sdk/sdk/models/shared";

let value: Five = {
  data: {
    type: "reasoning",
  },
  event: "content",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | *shared.SvgStreamEventData*                                            | :heavy_check_mark:                                                     | The event payload. Shape depends on the `type` phase discriminator.    |
| `event`                                                                | *"content"*                                                            | :heavy_check_mark:                                                     | The SSE event name (sent via the `event:` line).                       |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Optional SSE event id (sent via the `id:` line).                       |
| `retry`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Optional SSE retry value in milliseconds (sent via the `retry:` line). |