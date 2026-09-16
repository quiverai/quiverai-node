# AnimateSVGRequest

## Example Usage

```typescript
import { AnimateSVGRequest } from "@quiverai/sdk/sdk/models/shared";

let value: AnimateSVGRequest = {
  maxOutputTokens: 4096,
  model: "Corvette",
  prompt: "Make the logo pulse gently",
  reasoningEffort: "medium",
  svgSource: {
    url: "https://example.com/uploads/source.svg",
  },
  temperature: 0.4,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `maxOutputTokens`                                                                 | *number*                                                                          | :heavy_minus_sign:                                                                | Upper bound for output token count.                                               | 4096                                                                              |
| `model`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | Model identifier to use for animation.                                            |                                                                                   |
| `prompt`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | Optional animation prompt. If omitted, the model chooses a suitable animation.    | Make the logo pulse gently                                                        |
| `reasoningEffort`                                                                 | [shared.ReasoningEffort](../../../sdk/models/shared/reasoningeffort.md)           | :heavy_minus_sign:                                                                | Reasoning effort applied to this animation. When omitted, Arrow uses its default. | medium                                                                            |
| `stream`                                                                          | *boolean*                                                                         | :heavy_minus_sign:                                                                | When true, emits a Server-Sent Events stream.                                     | false                                                                             |
| `svgSource`                                                                       | *shared.SvgInputReference*                                                        | :heavy_check_mark:                                                                | Remote or base64-encoded SVG source to animate.                                   |                                                                                   |
| `temperature`                                                                     | *number*                                                                          | :heavy_minus_sign:                                                                | Animation sampling temperature.                                                   | 0.4                                                                               |