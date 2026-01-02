# SVGEditReasoningEvent

Model reasoning about SVG edit approach.

## Example Usage

```typescript
import { SVGEditReasoningEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGEditReasoningEvent = {
  data: {
    id: "svg-def456",
    text: "<value>",
  },
  event: "svg_edit.reasoning",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [shared.SVGEditReasoningEventData](../../../sdk/models/shared/svgeditreasoningeventdata.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `event`                                                                                     | *"svg_edit.reasoning"*                                                                      | :heavy_check_mark:                                                                          | N/A                                                                                         |