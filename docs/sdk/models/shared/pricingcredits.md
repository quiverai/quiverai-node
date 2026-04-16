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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `svgGenerate`                                                                               | *number*                                                                                    | :heavy_check_mark:                                                                          | Credits debited from the organization balance per SVG generation request for this model.    | 30                                                                                          |
| `svgVectorize`                                                                              | *number*                                                                                    | :heavy_check_mark:                                                                          | Credits debited from the organization balance per SVG vectorization request for this model. | 30                                                                                          |