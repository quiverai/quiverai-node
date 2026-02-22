# SvgDocument

## Example Usage

```typescript
import { SvgDocument } from "@quiverai/sdk/sdk/models/shared";

let value: SvgDocument = {
  mimeType: "image/svg+xml",
  svg:
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2l8 20H4z\"/></svg>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `mimeType`                                                                                  | [shared.MimeType](../../../sdk/models/shared/mimetype.md)                                   | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `svg`                                                                                       | *string*                                                                                    | :heavy_check_mark:                                                                          | Raw SVG markup.                                                                             | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l8 20H4z"/></svg> |