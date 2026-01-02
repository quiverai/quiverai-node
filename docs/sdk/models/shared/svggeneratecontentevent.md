# SVGGenerateContentEvent

Final postprocessed, optimized SVG.

## Example Usage

```typescript
import { SVGGenerateContentEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGGenerateContentEvent = {
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
  event: "svg_generate.content",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [shared.SVGGenerateContentEventData](../../../sdk/models/shared/svggeneratecontenteventdata.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `event`                                                                                         | *"svg_generate.content"*                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |