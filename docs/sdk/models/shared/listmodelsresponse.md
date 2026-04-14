# ListModelsResponse

## Example Usage

```typescript
import { ListModelsResponse } from "@quiverai/sdk/sdk/models/shared";

let value: ListModelsResponse = {
  data: [
    {
      created: 840036,
      id: "<id>",
      object: "model",
      ownedBy: "<value>",
      pricing: {
        svgGenerate: "0.03",
        svgVectorize: "0.03",
      },
    },
  ],
  object: "list",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Model](../../../sdk/models/shared/model.md)[]   | :heavy_check_mark:                                      | N/A                                                     |
| `object`                                                | [shared.ObjectT](../../../sdk/models/shared/objectt.md) | :heavy_check_mark:                                      | N/A                                                     |