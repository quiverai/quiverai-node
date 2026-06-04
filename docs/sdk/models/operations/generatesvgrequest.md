# GenerateSVGRequest

## Example Usage

```typescript
import { GenerateSVGRequest } from "@quiverai/sdk/sdk/models/operations";

let value: GenerateSVGRequest = {
  generateSVGRequest: {
    attributes: {
      viewBox: null,
    },
    instructions: "Use a flat monochrome style with clean geometry.",
    maxOutputTokens: 4096,
    model: "arrow-1.1",
    presencePenalty: 0.2,
    prompt: "Generate an icon of a unicorn",
    references: [
      "https://example.com/uploads/reference1.png",
    ],
    temperature: 0.4,
    topP: 0.95,
  },
  xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `generateSVGRequest`                                                                                                                              | [shared.GenerateSVGRequest](../../../sdk/models/shared/generatesvgrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |                                                                                                                                                   |
| `xTraceId`                                                                                                                                        | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Optional client-supplied trace identifier. The API echoes this value in `X-Trace-ID` and includes it in request logs for client-side correlation. | trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N                                                                                                                  |