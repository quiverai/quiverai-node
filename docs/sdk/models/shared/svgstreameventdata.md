# SvgStreamEventData

## Example Usage

```typescript
import { SvgStreamEventData } from "@quiverai/sdk/sdk/models/shared";

let value: SvgStreamEventData = {
  id: "<id>",
  svg: "<value>",
  type: "content",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | A unique identifier for the SVG operation.                                 |
| `svg`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | The SVG markup (partial during draft, complete during content).            |
| `text`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Optional reasoning text (present on reasoning events for some operations). |
| `type`                                                                     | [shared.Type](../../../sdk/models/shared/type.md)                          | :heavy_check_mark:                                                         | The event type indicating the phase.                                       |
| `usage`                                                                    | [shared.SvgUsage](../../../sdk/models/shared/svgusage.md)                  | :heavy_minus_sign:                                                         | N/A                                                                        |