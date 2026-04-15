# Pricing

## Example Usage

```typescript
import { Pricing } from "@quiverai/sdk/sdk/models/shared";

let value: Pricing = {
  svgGenerate: "0.30",
  svgVectorize: "0.30",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `svgGenerate`                            | *string*                                 | :heavy_check_mark:                       | USD price per SVG generation request.    | 0.30                                     |
| `svgVectorize`                           | *string*                                 | :heavy_check_mark:                       | USD price per SVG vectorization request. | 0.30                                     |