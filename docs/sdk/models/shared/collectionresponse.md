# CollectionResponse

## Example Usage

```typescript
import { CollectionResponse } from "@quiverai/sdk/sdk/models/shared";

let value: CollectionResponse = {
  created: 1704067200,
  items: [
    {
      mimeType: "image/svg+xml",
      svg:
        "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">...</svg>",
    },
  ],
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `created`                                                         | *number*                                                          | :heavy_check_mark:                                                | Unix timestamp of when the response was created                   | 1704067200                                                        |
| `items`                                                           | [shared.SVGDocument](../../../sdk/models/shared/svgdocument.md)[] | :heavy_check_mark:                                                | Array of generated SVG documents in the collection                |                                                                   |
| `usage`                                                           | [shared.Usage](../../../sdk/models/shared/usage.md)               | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |