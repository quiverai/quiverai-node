# SVGEditDraftEventData

## Example Usage

```typescript
import { SVGEditDraftEventData } from "@quiverai/sdk/sdk/models/shared";

let value: SVGEditDraftEventData = {
  id: "svg-def456",
  svg: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `id`                                  | *string*                              | :heavy_check_mark:                    | A unique identifier for the SVG edit. | svg-def456                            |
| `svg`                                 | *string*                              | :heavy_check_mark:                    | Partial SVG markup during editing.    |                                       |