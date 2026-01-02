# SVGVectorizeDraftEvent

Streaming partial SVG chunks during image vectorization.

## Example Usage

```typescript
import { SVGVectorizeDraftEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGVectorizeDraftEvent = {
  data: {
    id: "svg-xyz789",
    svg: "<value>",
  },
  event: "svg_vectorize.draft",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.SVGVectorizeDraftEventData](../../../sdk/models/shared/svgvectorizedrafteventdata.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `event`                                                                                       | *"svg_vectorize.draft"*                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |