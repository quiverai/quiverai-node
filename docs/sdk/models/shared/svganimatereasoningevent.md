# SVGAnimateReasoningEvent

Model reasoning about SVG animation approach.

## Example Usage

```typescript
import { SVGAnimateReasoningEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGAnimateReasoningEvent = {
  data: {
    id: "svg-ghi789",
    text: "<value>",
  },
  event: "svg_animate.reasoning",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [shared.SVGAnimateReasoningEventData](../../../sdk/models/shared/svganimatereasoningeventdata.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `event`                                                                                           | *"svg_animate.reasoning"*                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |