# Usage

## Example Usage

```typescript
import { Usage } from "@quiverai/sdk/sdk/models/shared";

let value: Usage = {
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
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `inputTokens`                                                                   | *number*                                                                        | :heavy_check_mark:                                                              | Number of tokens in the input                                                   | 256                                                                             |
| `inputTokensDetails`                                                            | [shared.InputTokensDetails](../../../sdk/models/shared/inputtokensdetails.md)   | :heavy_minus_sign:                                                              | Breakdown of input tokens by type                                               |                                                                                 |
| `outputTokens`                                                                  | *number*                                                                        | :heavy_check_mark:                                                              | Number of tokens in the output                                                  | 768                                                                             |
| `outputTokensDetails`                                                           | [shared.OutputTokensDetails](../../../sdk/models/shared/outputtokensdetails.md) | :heavy_minus_sign:                                                              | Breakdown of output tokens by type                                              |                                                                                 |
| `totalTokens`                                                                   | *number*                                                                        | :heavy_check_mark:                                                              | Total number of tokens used                                                     | 1024                                                                            |