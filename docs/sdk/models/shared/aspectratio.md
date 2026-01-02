# AspectRatio

Aspect ratio constraint for the generated SVG, specified as "width:height".
- `1:1`: Square
- `4:3`: Standard/classic
- `3:4`: Portrait standard
- `16:9`: Landscape/widescreen
- `9:16`: Portrait/tall (mobile)
- `3:2`: Photo landscape
- `2:3`: Photo portrait
- `21:9`: Ultra-wide/cinematic


## Example Usage

```typescript
import { AspectRatio } from "@quiverai/sdk/sdk/models/shared";

let value: AspectRatio = "1:1";
```

## Values

```typescript
"1:1" | "4:3" | "3:4" | "16:9" | "9:16" | "3:2" | "2:3" | "21:9"
```