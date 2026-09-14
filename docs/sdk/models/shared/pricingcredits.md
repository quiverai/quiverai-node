# PricingCredits

## Example Usage

```typescript
import { PricingCredits } from "@quiverai/sdk/sdk/models/shared";

let value: PricingCredits = {
  svgGenerate: 30,
  svgVectorize: 30,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `svgGenerate`                                                                                                 | *number*                                                                                                      | :heavy_check_mark:                                                                                            | Credits debited from the organization balance per generated SVG for this model's SVG generation operation.    | 30                                                                                                            |
| `svgVectorize`                                                                                                | *number*                                                                                                      | :heavy_check_mark:                                                                                            | Credits debited from the organization balance per generated SVG for this model's SVG vectorization operation. | 30                                                                                                            |