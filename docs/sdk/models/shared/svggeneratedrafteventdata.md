# SVGGenerateDraftEventData

## Example Usage

```typescript
import { SVGGenerateDraftEventData } from "@quiverai/sdk/sdk/models/shared";

let value: SVGGenerateDraftEventData = {
  id: "svg-abc123",
  svg: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | A unique identifier for the SVG generation. | svg-abc123                                  |
| `svg`                                       | *string*                                    | :heavy_check_mark:                          | Partial SVG markup during streaming.        |                                             |