# SVGVectorizeContentEvent

Final postprocessed, optimized SVG.

## Example Usage

```typescript
import { SVGVectorizeContentEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGVectorizeContentEvent = {
  data: {
    id: "svg-abc123",
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
  event: "svg_vectorize.content",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [shared.SVGVectorizeContentEventData](../../../sdk/models/shared/svgvectorizecontenteventdata.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `event`                                                                                           | *"svg_vectorize.content"*                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |