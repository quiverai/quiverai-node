# GetModelResponse

## Example Usage

```typescript
import { GetModelResponse } from "@quiverai/sdk/sdk/models/operations";

let value: GetModelResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    code: "operation_rate_limit_exceeded",
    message: "<value>",
    requestId: "<id>",
    status: 704863,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.GetModelResponseResult* | :heavy_check_mark:                  | N/A                                 |