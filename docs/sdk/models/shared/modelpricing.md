# ModelPricing

Pricing information for the model (per token, in USD as strings to avoid floating point issues).

## Example Usage

```typescript
import { ModelPricing } from "@quiverai/sdk/sdk/models/shared";

let value: ModelPricing = {
  completion: "0.000002",
  image: "0",
  inputCacheReads: "0",
  inputCacheWrites: "0",
  prompt: "0.000001",
  request: "0",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `completion`                               | *string*                                   | :heavy_check_mark:                         | Price per output token in USD.             | 0.000002                                   |
| `image`                                    | *string*                                   | :heavy_minus_sign:                         | Price per image in USD.                    | 0                                          |
| `inputCacheReads`                          | *string*                                   | :heavy_minus_sign:                         | Price per cached input token read in USD.  | 0                                          |
| `inputCacheWrites`                         | *string*                                   | :heavy_minus_sign:                         | Price per cached input token write in USD. | 0                                          |
| `prompt`                                   | *string*                                   | :heavy_check_mark:                         | Price per input token in USD.              | 0.000001                                   |
| `request`                                  | *string*                                   | :heavy_minus_sign:                         | Price per request in USD.                  | 0                                          |