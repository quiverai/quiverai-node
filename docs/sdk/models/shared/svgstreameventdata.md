# SVGStreamEventData

JSON payload for SVG streaming SSE events (sent in the `data:` line).

## Example Usage

```typescript
import { SVGStreamEventData } from "@quiverai/sdk/sdk/models/shared";

let value: SVGStreamEventData = {
  id: "svg-abc123",
  svg:
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">...</svg>",
  type: "content",
  usage: {
    inputTokens: 256,
    outputTokens: 768,
    totalTokens: 1024,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | A unique identifier for the SVG operation.                                 | svg-abc123                                                                 |
| `svg`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | The SVG markup (partial during draft, complete during content).            | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">...</svg>    |
| `text`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Optional reasoning text (present on reasoning events for some operations). |                                                                            |
| `type`                                                                     | [shared.Type](../../../sdk/models/shared/type.md)                          | :heavy_check_mark:                                                         | The event type indicating the phase.                                       | content                                                                    |
| `usage`                                                                    | [shared.Usage](../../../sdk/models/shared/usage.md)                        | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |