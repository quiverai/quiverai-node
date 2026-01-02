# Data

## Example Usage

```typescript
import { Data } from "@quiverai/sdk/sdk/models/shared";

let value: Data = {
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
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | A unique identifier for the SVG animation.          | svg-ghi789                                          |
| `svg`                                               | *string*                                            | :heavy_check_mark:                                  | Complete animated SVG markup.                       |                                                     |
| `usage`                                             | [shared.Usage](../../../sdk/models/shared/usage.md) | :heavy_minus_sign:                                  | N/A                                                 |                                                     |