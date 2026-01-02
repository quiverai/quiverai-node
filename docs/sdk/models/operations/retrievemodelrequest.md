# RetrieveModelRequest

## Example Usage

```typescript
import { RetrieveModelRequest } from "@quiverai/sdk/sdk/models/operations";

let value: RetrieveModelRequest = {
  model: "arrow-0.5-preview",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `model`                                                               | [shared.ModelIdsShared](../../../sdk/models/shared/modelidsshared.md) | :heavy_check_mark:                                                    | The ID of the model to retrieve                                       |