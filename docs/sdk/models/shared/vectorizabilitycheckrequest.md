# VectorizabilityCheckRequest

Request to check if an image is suitable for vectorization

## Example Usage

```typescript
import { VectorizabilityCheckRequest } from "@quiverai/sdk/sdk/models/shared";

let value: VectorizabilityCheckRequest = {
  image: {
    url: "https://example.com/uploads/reference1.png",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `image`                                                               | [shared.InputReference](../../../sdk/models/shared/inputreference.md) | :heavy_check_mark:                                                    | N/A                                                                   |