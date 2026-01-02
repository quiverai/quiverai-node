# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@quiverai/sdk/sdk/models/shared";

let value: ErrorT = {
  code: "invalid_api_key",
  message: "Invalid API key provided",
  param: "api_key",
  type: "invalid_request_error",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `code`                                             | *string*                                           | :heavy_minus_sign:                                 | Machine-readable error code                        | invalid_api_key                                    |
| `message`                                          | *string*                                           | :heavy_check_mark:                                 | A human-readable error message                     | Invalid API key provided                           |
| `param`                                            | *string*                                           | :heavy_minus_sign:                                 | The parameter that caused the error, if applicable | api_key                                            |
| `type`                                             | *string*                                           | :heavy_check_mark:                                 | The type of error                                  | invalid_request_error                              |