# SvgStreamEvent

Server-sent event (SSE) envelope for SVG streaming operations. Each SSE message uses the `event:` line for the phase discriminator and the `data:` line for a JSON payload. For `n > 1`, events are interleaved: use `data.index` for output position and `data.id` as the stable per-output identifier. The stream terminates with `data: [DONE]`.

## Example Usage

```typescript
import { SvgStreamEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SvgStreamEvent = {
  data: {
    id: "<id>",
    index: 0,
    svg: "<value>",
    type: "reasoning",
    usage: {
      inputTokens: 1200,
      outputTokens: 440,
      totalTokens: 1640,
    },
  },
  event: "draft",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.SvgStreamEventData](../../../sdk/models/shared/svgstreameventdata.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `event`                                                                       | [shared.Event](../../../sdk/models/shared/event.md)                           | :heavy_check_mark:                                                            | The SSE event name (sent via the `event:` line).                              |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Optional SSE event id (sent via the `id:` line).                              |
| `retry`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Optional SSE retry value in milliseconds (sent via the `retry:` line).        |