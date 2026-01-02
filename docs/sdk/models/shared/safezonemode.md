# SafeZoneMode

How safe zone values are interpreted.
- `relative`: Values are 0-1 representing percentage of viewport
- `absolute`: Values are in SVG coordinate units


## Example Usage

```typescript
import { SafeZoneMode } from "@quiverai/sdk/sdk/models/shared";

let value: SafeZoneMode = "absolute";
```

## Values

```typescript
"relative" | "absolute"
```