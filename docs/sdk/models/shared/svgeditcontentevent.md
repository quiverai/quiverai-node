# SVGEditContentEvent

Final postprocessed, optimized edited SVG.

## Example Usage

```typescript
import { SVGEditContentEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGEditContentEvent = {
  data: {
    id: "svg-def456",
    svg: "<value>",
    usage: {
      inputTokens: 256,
      inputTokensDetails: {
        imageTokens: 128,
        svgTokens: 128,
        textTokens: 128,
      },
      outputTokens: 768,
      outputTokensDetails: {
        svgTokens: 768,
      },
      totalTokens: 1024,
    },
  },
  event: "svg_edit.content",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [shared.SVGEditContentEventData](../../../sdk/models/shared/svgeditcontenteventdata.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `event`                                                                                 | *"svg_edit.content"*                                                                    | :heavy_check_mark:                                                                      | N/A                                                                                     |