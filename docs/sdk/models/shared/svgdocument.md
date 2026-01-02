# SVGDocument

## Example Usage

```typescript
import { SVGDocument } from "@quiverai/sdk/sdk/models/shared";

let value: SVGDocument = {
  mimeType: "image/svg+xml",
  svg:
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">...</svg>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `mimeType`                                                              | [shared.MimeType](../../../sdk/models/shared/mimetype.md)               | :heavy_check_mark:                                                      | MIME type of the SVG                                                    | image/svg+xml                                                           |
| `svg`                                                                   | *string*                                                                | :heavy_check_mark:                                                      | The generated SVG markup                                                | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">...</svg> |