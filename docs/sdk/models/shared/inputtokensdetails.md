# InputTokensDetails

Breakdown of input tokens by type

## Example Usage

```typescript
import { InputTokensDetails } from "@quiverai/sdk/sdk/models/shared";

let value: InputTokensDetails = {
  imageTokens: 128,
  svgTokens: 128,
  textTokens: 128,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `imageTokens`                       | *number*                            | :heavy_minus_sign:                  | Number of image tokens in the input | 128                                 |
| `svgTokens`                         | *number*                            | :heavy_minus_sign:                  | Number of SVG tokens in the input   | 128                                 |
| `textTokens`                        | *number*                            | :heavy_minus_sign:                  | Number of text tokens in the input  | 128                                 |