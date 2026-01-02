# SVGParams

SVG-specific generation parameters for controlling canvas, design, and styling.
These parameters give fine-grained control over the generated SVG output.


## Example Usage

```typescript
import { SVGParams } from "@quiverai/sdk/sdk/models/shared";

let value: SVGParams = {
  canvas: {
    safeZone: {},
    viewBox: {},
  },
  constraints: {
    maxElements: 128,
    maxPaths: 64,
    maxPointsPerPath: 256,
  },
  design: {
    colors: {
      palette: [
        "#12FBA2",
        "#1A1A1A",
        "#FFFFFF",
      ],
      roles: {
        accent: [
          "#12FBA2",
        ],
        background: [
          "#FFFFFF",
        ],
        primary: [
          "#1A1A1A",
        ],
      },
    },
    stylePreset: "outline",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `canvas`                                                                                                                                                                                                                                                                       | [shared.Canvas](../../../sdk/models/shared/canvas.md)                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Controls the coordinate system and "Safe Zones" to prevent clipping/bad cropping.<br/>NOTE: "mode" determines the default canvas if this is omitted.<br/>                                                                                                                      |                                                                                                                                                                                                                                                                                |
| `constraints`                                                                                                                                                                                                                                                                  | [shared.Constraints](../../../sdk/models/shared/constraints.md)                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Limits and constraints for the generated SVG output                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                |
| `design`                                                                                                                                                                                                                                                                       | [shared.Design](../../../sdk/models/shared/design.md)                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Controls how the model applies aesthetics to the generated SVG                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                |
| `mode`                                                                                                                                                                                                                                                                         | [shared.SVGMode](../../../sdk/models/shared/svgmode.md)                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                             | The generation mode optimized for different use cases.<br/>- `icon`: Optimized for small sizes, usually square, distinct shapes<br/>- `illustration`: Optimized for scenes, larger viewports, complex details<br/>- `logo`: Optimized for uniqueness, strong silhouettes, text-compatible<br/> | icon                                                                                                                                                                                                                                                                           |