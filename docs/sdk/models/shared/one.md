# One

## Example Usage

```typescript
import { One } from "@quiverai/sdk/sdk/models/shared";

let value: One = {
  maxReviewSteps: 2,
  model: "Fiesta",
  prompt: "Make the mark bolder and simplify the star points.",
  reasoningEffort: "medium",
  referenceImages: null,
  settings: {
    maxOutputTokens: 4096,
    orchestratorMaxOutputTokens: 4096,
    shallowMaxOutputTokens: 2048,
    temperature: 0.4,
  },
  svg:
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2l8 20H4z\"/></svg>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `maxReviewSteps`                                                                                    | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Maximum edit review and redo steps after the initial edit.                                          | 2                                                                                                   |
| `model`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | Model identifier to use for editing.                                                                |                                                                                                     |
| `prompt`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | Instruction describing how to edit the source SVG.                                                  | Make the mark bolder and simplify the star points.                                                  |
| `reasoningEffort`                                                                                   | [shared.EditSVGRequestReasoningEffort](../../../sdk/models/shared/editsvgrequestreasoningeffort.md) | :heavy_minus_sign:                                                                                  | Reasoning effort applied to this editing. When omitted, Arrow uses its default.                     | medium                                                                                              |
| `referenceImages`                                                                                   | *shared.ImageInputReferenceInput*[]                                                                 | :heavy_minus_sign:                                                                                  | Optional image references for the edit.                                                             |                                                                                                     |
| `settings`                                                                                          | [shared.EditSettings](../../../sdk/models/shared/editsettings.md)                                   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `stream`                                                                                            | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | When true, emits a Server-Sent Events stream.                                                       | false                                                                                               |
| `svg`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | Inline SVG markup to edit.                                                                          | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l8 20H4z"/></svg>         |
| `svgSource`                                                                                         | *any*                                                                                               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |