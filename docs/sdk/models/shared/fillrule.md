# FillRule

Algorithm for determining inside/outside of complex paths.
- `nonzero`: Standard fill rule
- `evenodd`: Alternating fill based on path crossings


## Example Usage

```typescript
import { FillRule } from "@quiverai/sdk/sdk/models/shared";

let value: FillRule = "nonzero";
```

## Values

```typescript
"nonzero" | "evenodd"
```