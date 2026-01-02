# SVGVectorizeInput

Input configuration for image-to-SVG vectorization

## Example Usage

```typescript
import { SVGVectorizeInput } from "@quiverai/sdk/sdk/models/shared";

let value: SVGVectorizeInput = {
  image: {
    url: "https://example.com/uploads/reference1.png",
  },
  instructions: "Simplify to minimal geometric shapes",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `image`                                                               | [shared.InputReference](../../../sdk/models/shared/inputreference.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `instructions`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | Optional instructions for vectorization style                         | Simplify to minimal geometric shapes                                  |