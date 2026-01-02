# SVGVectorizeReasoningEvent

Model reasoning about SVG design approach.

## Example Usage

```typescript
import { SVGVectorizeReasoningEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGVectorizeReasoningEvent = {
  data: {
    id: "svg-abc123",
    text: "<value>",
  },
  event: "svg_vectorize.reasoning",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [shared.SVGVectorizeReasoningEventData](../../../sdk/models/shared/svgvectorizereasoningeventdata.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `event`                                                                                               | *"svg_vectorize.reasoning"*                                                                           | :heavy_check_mark:                                                                                    | N/A                                                                                                   |