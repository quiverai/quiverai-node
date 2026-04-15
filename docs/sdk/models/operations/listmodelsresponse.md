# ListModelsResponse

## Example Usage

```typescript
import { ListModelsResponse } from "@quiverai/sdk/sdk/models/operations";

let value: ListModelsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    data: [
      {
        created: 840036,
        id: "<id>",
        object: "model",
        ownedBy: "<value>",
        pricing: {
          svgGenerate: "0.30",
          svgVectorize: "0.30",
        },
      },
    ],
    object: "list",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `headers`                             | Record<string, *string*[]>            | :heavy_check_mark:                    | N/A                                   |
| `result`                              | *operations.ListModelsResponseResult* | :heavy_check_mark:                    | N/A                                   |