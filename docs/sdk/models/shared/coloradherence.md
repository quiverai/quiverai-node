# ColorAdherence

How strictly the model must adhere to the provided colors.
- `strict`: Only use exact hex codes provided
- `tints_and_shades`: Can adjust lightness/opacity, but no new hues
- `creative`: Palette is a suggestion/starting point


## Example Usage

```typescript
import { ColorAdherence } from "@quiverai/sdk/sdk/models/shared";

let value: ColorAdherence = "creative";
```

## Values

```typescript
"strict" | "tints_and_shades" | "creative"
```