# SVGEditInput

Input configuration for text-to-SVG generation

## Example Usage

```typescript
import { SVGEditInput } from "@quiverai/sdk/sdk/models/shared";

let value: SVGEditInput = {
  instructions: "Create a minimal, modern icon",
  prompt: "Generate an icon of a unicorn",
  references: [
    {
      url: "https://example.com/uploads/reference1.png",
    },
  ],
  source: "<svg xmlns=\"http://www.w3.org/2000/svg\">...</svg>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `instructions`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | Additional instructions for the model                                   | Create a minimal, modern icon                                           |
| `prompt`                                                                | *string*                                                                | :heavy_check_mark:                                                      | The main text prompt describing the desired SVG                         | Generate an icon of a unicorn                                           |
| `references`                                                            | [shared.InputReference](../../../sdk/models/shared/inputreference.md)[] | :heavy_minus_sign:                                                      | Optional reference images to guide style/composition                    |                                                                         |
| `source`                                                                | *string*                                                                | :heavy_check_mark:                                                      | Source SVG for editing operations (inline SVG markup or URL)            | <svg xmlns="http://www.w3.org/2000/svg">...</svg>                       |