# AnimateSVGResponseBody

When `stream` is false, returns `application/json` with the full animated SVG response. When `stream` is true, returns `text/event-stream` with Server-Sent Events. Each SSE message contains an `event:` line (`generating`, `reasoning`, `draft`, or `content`) and a `data:` line with a JSON payload. Token-priced models report measured totals in `usage` and omit `credits`. Fixed-credit models retain compatibility token totals of `0` and report `credits`; for streaming, fixed credits are emitted on completed `content` events. The stream terminates with `data: [DONE]`.

## Example Usage

```typescript
import { AnimateSVGResponseBody } from "@quiverai/sdk/sdk/models/operations";

let value: AnimateSVGResponseBody = {
  created: 1704067200,
  credits: 1,
  data: [],
  id: "resp_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  usage: {
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | 1704067200                                                                                                           |
| `credits`                                                                                                            | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Credit cost for fixed-credit models. Omitted for token-priced models, whose measured totals are returned in `usage`. | 1                                                                                                                    |
| `data`                                                                                                               | *operations.Data*[]                                                                                                  | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | resp_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N                                                                                      |
| `svgScore`                                                                                                           | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `usage`                                                                                                              | [operations.Usage](../../../sdk/models/operations/usage.md)                                                          | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |