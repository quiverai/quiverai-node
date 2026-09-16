# Usage

Token totals for token-priced models. Fixed-credit models use `credits` for billing and may report compatibility zeros here.

## Example Usage

```typescript
import { Usage } from "@quiverai/sdk/sdk/models/operations";

let value: Usage = {
  inputTokens: 0,
  outputTokens: 0,
  totalTokens: 0,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `inputTokens`                                                                                                              | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | Measured token count for token-priced models. Fixed-credit models retain this field for compatibility and may report zero. | 0                                                                                                                          |
| `outputTokens`                                                                                                             | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | Measured token count for token-priced models. Fixed-credit models retain this field for compatibility and may report zero. | 0                                                                                                                          |
| `totalTokens`                                                                                                              | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | Measured token count for token-priced models. Fixed-credit models retain this field for compatibility and may report zero. | 0                                                                                                                          |