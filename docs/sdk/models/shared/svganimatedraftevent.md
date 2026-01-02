# SVGAnimateDraftEvent

Streaming partial SVG chunks during animation generation.

## Example Usage

```typescript
import { SVGAnimateDraftEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGAnimateDraftEvent = {
  data: {
    id: "svg-ghi789",
    svg: "<value>",
  },
  event: "svg_animate.draft",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.SVGAnimateDraftEventData](../../../sdk/models/shared/svganimatedrafteventdata.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `event`                                                                                   | *"svg_animate.draft"*                                                                     | :heavy_check_mark:                                                                        | N/A                                                                                       |