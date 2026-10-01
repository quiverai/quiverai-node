# Two

## Example Usage

```typescript
import { Two } from "@quiverai/sdk/sdk/models/shared";

let value: Two = {
  maxReviewSteps: 2,
  model: "Model Y",
  prompt: "Make the mark bolder and simplify the star points.",
  reasoningEffort: "medium",
  referenceImages: null,
  settings: {
    maxOutputTokens: 4096,
    orchestratorMaxOutputTokens: 4096,
    shallowMaxOutputTokens: 2048,
    temperature: 0.4,
  },
  svgSource: {
    url: "https://example.com/uploads/source.svg",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `maxReviewSteps`                                                                                                  | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Maximum edit review and redo steps after the initial edit.                                                        | 2                                                                                                                 |
| `model`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Model identifier to use for editing.                                                                              |                                                                                                                   |
| `prompt`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Instruction describing how to edit the source SVG.                                                                | Make the mark bolder and simplify the star points.                                                                |
| `reasoningEffort`                                                                                                 | [shared.EditSVGRequestSchemasReasoningEffort](../../../sdk/models/shared/editsvgrequestschemasreasoningeffort.md) | :heavy_minus_sign:                                                                                                | Reasoning effort applied to this editing. When omitted, Arrow uses its default.                                   | medium                                                                                                            |
| `referenceImages`                                                                                                 | *shared.ImageInputReferenceInput*[]                                                                               | :heavy_minus_sign:                                                                                                | Optional image references for the edit.                                                                           |                                                                                                                   |
| `settings`                                                                                                        | [shared.EditSettings](../../../sdk/models/shared/editsettings.md)                                                 | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `stream`                                                                                                          | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | When true, emits a Server-Sent Events stream.                                                                     | false                                                                                                             |
| `svg`                                                                                                             | *any*                                                                                                             | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `svgSource`                                                                                                       | *shared.SvgInputReference*                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |