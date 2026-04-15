# SvgGeneratingEventData

## Example Usage

```typescript
import { SvgGeneratingEventData } from "@quiverai/sdk/sdk/models/shared";

let value: SvgGeneratingEventData = {
  index: 0,
  type: "generating",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `additionalProperties`                                                                           | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | A unique identifier for the SVG output when available. Stable per output across streamed events. |                                                                                                  |
| `index`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Zero-based output index for this event. Present for multi-output streams (`n > 1`).              | 0                                                                                                |
| `svg`                                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional SVG payload for forward compatibility.                                                  |                                                                                                  |
| `text`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional generation status or reasoning text.                                                    |                                                                                                  |
| `type`                                                                                           | *"generating"*                                                                                   | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `usage`                                                                                          | [shared.SvgUsage](../../../sdk/models/shared/svgusage.md)                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |