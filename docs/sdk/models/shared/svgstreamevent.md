# SVGStreamEvent

Server-sent event (SSE) envelope for SVG streaming operations.

Speakeasy expects SSE event schemas to only declare the canonical SSE fields
(`id`, `event`, `data`, `retry`) at the top level. The server uses the SSE `event:`
line for the phase discriminator and the `data:` line for a JSON payload.


## Example Usage

```typescript
import { SVGStreamEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGStreamEvent = {
  data: {
    id: "svg-abc123",
    svg:
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">...</svg>",
    type: "content",
    usage: {
      inputTokens: 256,
      outputTokens: 768,
      totalTokens: 1024,
    },
  },
  event: "content",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.SVGStreamEventData](../../../sdk/models/shared/svgstreameventdata.md) | :heavy_check_mark:                                                            | JSON payload for SVG streaming SSE events (sent in the `data:` line).         |
| `event`                                                                       | [shared.Event](../../../sdk/models/shared/event.md)                           | :heavy_check_mark:                                                            | The SSE event name (sent via the `event:` line).                              |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Optional SSE event id (sent via the `id:` line).                              |
| `retry`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Optional SSE retry value in milliseconds (sent via the `retry:` line).        |