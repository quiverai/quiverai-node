# SVGResponse

## Example Usage

```typescript
import { SVGResponse } from "@quiverai/sdk/sdk/models/shared";

let value: SVGResponse = {
  created: 1704067200,
  data: [],
  id: "svg-abc123",
  usage: {
    inputTokens: 256,
    outputTokens: 768,
    totalTokens: 1024,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `created`                                                         | *number*                                                          | :heavy_check_mark:                                                | Unix timestamp of when the response was created                   | 1704067200                                                        |
| `data`                                                            | [shared.SVGDocument](../../../sdk/models/shared/svgdocument.md)[] | :heavy_check_mark:                                                | Array of generated SVG documents                                  |                                                                   |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | A unique identifier for the SVG generation.                       | svg-abc123                                                        |
| `usage`                                                           | [shared.Usage](../../../sdk/models/shared/usage.md)               | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |