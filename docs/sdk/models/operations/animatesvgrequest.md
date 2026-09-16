# AnimateSVGRequest

## Example Usage

```typescript
import { AnimateSVGRequest } from "@quiverai/sdk/sdk/models/operations";

let value: AnimateSVGRequest = {
  animateSVGRequest: {
    maxOutputTokens: 4096,
    model: "Corvette",
    prompt: "Make the logo pulse gently",
    reasoningEffort: "medium",
    svgSource: {
      url: "https://example.com/uploads/source.svg",
    },
    temperature: 0.4,
  },
  xTraceId: "trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animateSVGRequest`                                                                                                                               | [shared.AnimateSVGRequest](../../../sdk/models/shared/animatesvgrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |                                                                                                                                                   |
| `xTraceId`                                                                                                                                        | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Optional client-supplied trace identifier. The API echoes this value in `X-Trace-ID` and includes it in request logs for client-side correlation. | trace_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N                                                                                                                  |