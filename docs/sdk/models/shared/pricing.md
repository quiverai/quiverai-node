# Pricing

## Example Usage

```typescript
import { Pricing } from "@quiverai/sdk/sdk/models/shared";

let value: Pricing = {
  completion: "<value>",
  prompt: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `completion`       | *string*           | :heavy_check_mark: | N/A                |
| `image`            | *string*           | :heavy_minus_sign: | N/A                |
| `inputCacheReads`  | *string*           | :heavy_minus_sign: | N/A                |
| `inputCacheWrites` | *string*           | :heavy_minus_sign: | N/A                |
| `prompt`           | *string*           | :heavy_check_mark: | N/A                |
| `request`          | *string*           | :heavy_minus_sign: | N/A                |