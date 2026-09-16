# PricingCredits

## Example Usage

```typescript
import { PricingCredits } from "@quiverai/sdk/sdk/models/shared";

let value: PricingCredits = {
  svgAnimate: 25,
  svgEdit: 20,
  svgGenerate: 30,
  svgVectorize: 30,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `svgAnimate`                                                                                                       | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Credits debited from the organization balance per generated animated SVG for this model's SVG animation operation. | 25                                                                                                                 |
| `svgEdit`                                                                                                          | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Credits debited from the organization balance per generated SVG for this model's SVG edit operation.               | 20                                                                                                                 |
| `svgGenerate`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Credits debited from the organization balance per generated SVG for this model's SVG generation operation.         | 30                                                                                                                 |
| `svgVectorize`                                                                                                     | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Credits debited from the organization balance per generated SVG for this model's SVG vectorization operation.      | 30                                                                                                                 |