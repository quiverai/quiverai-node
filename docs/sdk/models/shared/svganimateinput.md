# SVGAnimateInput

## Example Usage

```typescript
import { SVGAnimateInput } from "@quiverai/sdk/sdk/models/shared";

let value: SVGAnimateInput = {
  instructions: "Use smooth CSS transitions",
  motionPrompt: "Add a gentle floating animation",
  source: "<svg xmlns=\"http://www.w3.org/2000/svg\">...</svg>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `instructions`                                               | *string*                                                     | :heavy_minus_sign:                                           | Additional instructions for the model                        | Use smooth CSS transitions                                   |
| `motionPrompt`                                               | *string*                                                     | :heavy_check_mark:                                           | Description of the desired animation                         | Add a gentle floating animation                              |
| `source`                                                     | *string*                                                     | :heavy_check_mark:                                           | Source SVG for editing operations (inline SVG markup or URL) | <svg xmlns="http://www.w3.org/2000/svg">...</svg>            |