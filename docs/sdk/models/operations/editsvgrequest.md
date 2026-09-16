# EditSVGRequest

## Example Usage

```typescript
import { EditSVGRequest } from "@quiverai/sdk/sdk/models/operations";

let value: EditSVGRequest = {
  editSVGRequest: {
    maxReviewSteps: 2,
    model: "PT Cruiser",
    prompt: "Make the mark bolder and simplify the star points.",
    reasoningEffort: "medium",
    referenceImages: [
      {
        base64:
          "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
      },
    ],
    settings: {
      maxOutputTokens: 4096,
      orchestratorMaxOutputTokens: 4096,
      shallowMaxOutputTokens: 2048,
      temperature: 0.4,
    },
    stream: false,
    svg:
      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2l8 20H4z\"/></svg>",
  },
  xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `editSVGRequest`                                                                                                                                  | *shared.EditSVGRequest*                                                                                                                           | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |                                                                                                                                                   |
| `xTraceId`                                                                                                                                        | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Optional client-supplied trace identifier. The API echoes this value in `X-Trace-ID` and includes it in request logs for client-side correlation. | trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N                                                                                                                  |