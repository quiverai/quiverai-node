# SvgResponse

## Example Usage

```typescript
import { SvgResponse } from "@quiverai/sdk/sdk/models/shared";

let value: SvgResponse = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                                    | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 1704067200                                                                                                                   |
| `credits`                                                                                                                    | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Credit cost for fixed-credit models. Omitted for token-priced models, whose measured totals are returned in `usage`.         | 1                                                                                                                            |
| `data`                                                                                                                       | [shared.SvgDocument](../../../sdk/models/shared/svgdocument.md)[]                                                            | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | resp_01J9AZ3XJ7D5S9ZV2Q5Z8E1A4N                                                                                              |
| `usage`                                                                                                                      | [shared.SvgUsage](../../../sdk/models/shared/svgusage.md)                                                                    | :heavy_minus_sign:                                                                                                           | Token totals for token-priced models. Fixed-credit models use `credits` for billing and may report compatibility zeros here. |                                                                                                                              |