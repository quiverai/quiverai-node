# StylePreset

Predefined style to apply to the generated SVG.
- `flat`: Solid fills, no gradients or shadows
- `outline`: Stroke-based with minimal or no fills
- `duotone`: Two-color design style
- `gradient`: Uses gradient fills
- `isometric`: 3D isometric projection style
- `hand_drawn`: Organic, sketch-like appearance


## Example Usage

```typescript
import { StylePreset } from "@quiverai/sdk/sdk/models/shared";

let value: StylePreset = "outline";
```

## Values

```typescript
"flat" | "outline" | "duotone" | "gradient" | "isometric" | "hand_drawn"
```