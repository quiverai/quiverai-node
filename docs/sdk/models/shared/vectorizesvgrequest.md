# VectorizeSVGRequest

## Example Usage

```typescript
import { VectorizeSVGRequest } from "@quiverai/sdk/sdk/models/shared";

let value: VectorizeSVGRequest = {
  autoCrop: true,
  image: {
    url: "https://example.com/uploads/reference1.png",
  },
  maxOutputTokens: 4096,
  model: "arrow-preview",
  presencePenalty: 0.2,
  targetSize: 1024,
  temperature: 0.4,
  topP: 0.95,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `autoCrop`                                                    | *boolean*                                                     | :heavy_minus_sign:                                            | Auto-crop image to the dominant subject before vectorization. | true                                                          |
| `image`                                                       | *shared.ImageInputReference*                                  | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `maxOutputTokens`                                             | *number*                                                      | :heavy_minus_sign:                                            | Upper bound for output token count.                           | 4096                                                          |
| `model`                                                       | *string*                                                      | :heavy_check_mark:                                            | Model identifier to use for generation or vectorization.      | arrow-preview                                                 |
| `presencePenalty`                                             | *number*                                                      | :heavy_minus_sign:                                            | Penalty for tokens already present in prior output.           | 0.2                                                           |
| `stream`                                                      | *boolean*                                                     | :heavy_minus_sign:                                            | When true, emits a Server-Sent Events stream.                 | false                                                         |
| `targetSize`                                                  | *number*                                                      | :heavy_minus_sign:                                            | Square resize target in pixels.                               | 1024                                                          |
| `temperature`                                                 | *number*                                                      | :heavy_minus_sign:                                            | Sampling temperature.                                         | 0.4                                                           |
| `topP`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Nucleus sampling probability.                                 | 0.95                                                          |