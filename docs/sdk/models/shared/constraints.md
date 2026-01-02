# Constraints

Limits and constraints for the generated SVG output

## Example Usage

```typescript
import { Constraints } from "@quiverai/sdk/sdk/models/shared";

let value: Constraints = {
  maxElements: 128,
  maxPaths: 64,
  maxPointsPerPath: 256,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `maxElements`                              | *number*                                   | :heavy_minus_sign:                         | Maximum total number of SVG elements       | 128                                        |
| `maxPaths`                                 | *number*                                   | :heavy_minus_sign:                         | Maximum number of path elements in the SVG | 64                                         |
| `maxPointsPerPath`                         | *number*                                   | :heavy_minus_sign:                         | Maximum number of points/commands per path | 256                                        |