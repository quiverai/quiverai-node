# SVGInput

Input configuration for text-to-SVG generation

## Example Usage

```typescript
import { SVGInput } from "@quiverai/sdk/sdk/models/shared";

let value: SVGInput = {
  instructions: "Create a minimal, modern icon",
  prompt: "Generate an icon of a unicorn",
  references: [
    {
      url: "https://example.com/uploads/reference1.png",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `instructions`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | Additional instructions for the model                                   | Create a minimal, modern icon                                           |
| `prompt`                                                                | *string*                                                                | :heavy_check_mark:                                                      | The main text prompt describing the desired SVG                         | Generate an icon of a unicorn                                           |
| `references`                                                            | [shared.InputReference](../../../sdk/models/shared/inputreference.md)[] | :heavy_minus_sign:                                                      | Optional reference images to guide style/composition                    |                                                                         |