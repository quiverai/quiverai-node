# SVGCapabilities

SVG-specific capabilities and recommendations for the model.

## Example Usage

```typescript
import { SVGCapabilities } from "@quiverai/sdk/sdk/models/shared";

let value: SVGCapabilities = {
  maxComplexity: 4,
  recommendedViewboxSizes: [
    24,
    48,
    64,
    128,
    256,
    512,
  ],
  supportedModes: [
    "icon",
    "illustration",
    "logo",
  ],
  supportedStyles: [
    "flat",
    "outline",
    "duotone",
    "gradient",
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `maxComplexity`                                                           | *number*                                                                  | :heavy_minus_sign:                                                        | Maximum complexity level (1-4) the model can handle well.                 | 4                                                                         |
| `recommendedViewboxSizes`                                                 | *number*[]                                                                | :heavy_minus_sign:                                                        | Recommended viewBox sizes for optimal output quality.                     | [<br/>24,<br/>48,<br/>64,<br/>128,<br/>256,<br/>512<br/>]                 |
| `supportedModes`                                                          | [shared.SupportedModes](../../../sdk/models/shared/supportedmodes.md)[]   | :heavy_minus_sign:                                                        | SVG generation modes the model excels at.                                 | [<br/>"icon",<br/>"illustration",<br/>"logo"<br/>]                        |
| `supportedStyles`                                                         | [shared.SupportedStyles](../../../sdk/models/shared/supportedstyles.md)[] | :heavy_minus_sign:                                                        | Style presets the model supports.                                         | [<br/>"flat",<br/>"outline",<br/>"duotone",<br/>"gradient"<br/>]          |