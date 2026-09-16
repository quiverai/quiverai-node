# EditSettings

## Example Usage

```typescript
import { EditSettings } from "@quiverai/sdk/sdk/models/shared";

let value: EditSettings = {
  maxOutputTokens: 4096,
  orchestratorMaxOutputTokens: 4096,
  shallowMaxOutputTokens: 2048,
  temperature: 0.4,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `maxOutputTokens`                              | *number*                                       | :heavy_minus_sign:                             | Upper bound for final edit output token count. | 4096                                           |
| `orchestratorMaxOutputTokens`                  | *number*                                       | :heavy_minus_sign:                             | Optional provider orchestrator token budget.   | 4096                                           |
| `shallowMaxOutputTokens`                       | *number*                                       | :heavy_minus_sign:                             | Optional provider shallow edit token budget.   | 2048                                           |
| `temperature`                                  | *number*                                       | :heavy_minus_sign:                             | Edit sampling temperature.                     | 0.4                                            |