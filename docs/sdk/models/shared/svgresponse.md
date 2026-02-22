# SvgResponse

## Example Usage

```typescript
import { SvgResponse } from "@quiverai/sdk/sdk/models/shared";

let value: SvgResponse = {
  created: 1704067200,
  data: [],
  id: "resp_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `created`                                                         | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               | 1704067200                                                        |
| `data`                                                            | [shared.SvgDocument](../../../sdk/models/shared/svgdocument.md)[] | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               | resp_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N                                   |
| `usage`                                                           | [shared.SvgUsage](../../../sdk/models/shared/svgusage.md)         | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |