# SVGAnimateContentEvent

Final postprocessed, optimized animated SVG.

## Example Usage

```typescript
import { SVGAnimateContentEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGAnimateContentEvent = {
  data: {
    id: "svg-ghi789",
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
  event: "svg_animate.content",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `data`                                            | [shared.Data](../../../sdk/models/shared/data.md) | :heavy_check_mark:                                | N/A                                               |
| `event`                                           | *"svg_animate.content"*                           | :heavy_check_mark:                                | N/A                                               |