# SVGGenerateReasoningEvent

Model reasoning about SVG design approach.

## Example Usage

```typescript
import { SVGGenerateReasoningEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGGenerateReasoningEvent = {
  data: {
    id: "svg-abc123",
    text: "<value>",
  },
  event: "svg_generate.reasoning",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.SVGGenerateReasoningEventData](../../../sdk/models/shared/svggeneratereasoningeventdata.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `event`                                                                                             | *"svg_generate.reasoning"*                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |