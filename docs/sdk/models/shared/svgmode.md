# SVGMode

The generation mode optimized for different use cases.
- `icon`: Optimized for small sizes, usually square, distinct shapes
- `illustration`: Optimized for scenes, larger viewports, complex details
- `logo`: Optimized for uniqueness, strong silhouettes, text-compatible


## Example Usage

```typescript
import { SVGMode } from "@quiverai/sdk/sdk/models/shared";

let value: SVGMode = "icon";
```

## Values

```typescript
"icon" | "illustration" | "logo"
```