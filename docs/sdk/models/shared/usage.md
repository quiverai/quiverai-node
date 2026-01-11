# Usage

## Example Usage

```typescript
import { Usage } from "@quiverai/sdk/sdk/models/shared";

let value: Usage = {
  inputTokens: 256,
  outputTokens: 768,
  totalTokens: 1024,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `inputTokens`                  | *number*                       | :heavy_check_mark:             | Number of tokens in the input  | 256                            |
| `outputTokens`                 | *number*                       | :heavy_check_mark:             | Number of tokens in the output | 768                            |
| `totalTokens`                  | *number*                       | :heavy_check_mark:             | Total number of tokens used    | 1024                           |