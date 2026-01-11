# VectorizabilityCheckRequest

Request to check if an image is suitable for vectorization

## Example Usage

```typescript
import { VectorizabilityCheckRequest } from "@quiverai/sdk/sdk/models/shared";

let value: VectorizabilityCheckRequest = {
  image: {
    base64:
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `image`                                       | *shared.ImageInputReference*                  | :heavy_check_mark:                            | Reference image input (URL or base64-encoded) |