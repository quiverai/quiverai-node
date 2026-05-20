# ViewBox

SVG root viewBox attribute controls.

## Example Usage

```typescript
import { ViewBox } from "@quiverai/sdk/sdk/models/shared";

let value: ViewBox = {
  height: 512,
  minX: 0,
  minY: 0,
  width: 512,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `height`                                              | *number*                                              | :heavy_check_mark:                                    | Height of the SVG viewBox. Must be greater than zero. | 512                                                   |
| `minX`                                                | *number*                                              | :heavy_check_mark:                                    | Minimum x coordinate of the SVG viewBox.              | 0                                                     |
| `minY`                                                | *number*                                              | :heavy_check_mark:                                    | Minimum y coordinate of the SVG viewBox.              | 0                                                     |
| `width`                                               | *number*                                              | :heavy_check_mark:                                    | Width of the SVG viewBox. Must be greater than zero.  | 512                                                   |