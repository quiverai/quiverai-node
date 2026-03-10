# GetModelResponse

## Example Usage

```typescript
import { GetModelResponse } from "@quiverai/sdk/sdk/models/operations";

let value: GetModelResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    code: "model_not_found",
    message: "<value>",
    requestId: "<id>",
    status: 915608,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.GetModelResponseResult* | :heavy_check_mark:                  | N/A                                 |