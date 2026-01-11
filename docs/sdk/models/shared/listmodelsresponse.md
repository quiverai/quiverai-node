# ListModelsResponse

Response containing a list of available models. Compatible with OpenAI SDK.

## Example Usage

```typescript
import { ListModelsResponse } from "@quiverai/sdk/sdk/models/shared";

let value: ListModelsResponse = {
  data: [
    {
      contextLength: 128000,
      created: 1704067200,
      description:
        "Optimized for high-quality icon and illustration generation",
      id: "arrow-0.5",
      inputModalities: [
        "text",
        "image",
      ],
      maxOutputLength: 16384,
      name: "Arrow 0.5",
      outputModalities: [
        "svg",
      ],
      pricing: {
        completion: "0.000002",
        image: "0",
        inputCacheReads: "0",
        inputCacheWrites: "0",
        prompt: "0.000001",
        request: "0",
      },
      supportedOperations: [
        "chat_completions",
      ],
      supportedSamplingParameters: [
        "temperature",
        "top_p",
        "stop",
        "frequency_penalty",
        "presence_penalty",
        "seed",
      ],
    },
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Model](../../../sdk/models/shared/model.md)[]   | :heavy_check_mark:                                      | Array of model objects.                                 |                                                         |
| `object`                                                | [shared.ObjectT](../../../sdk/models/shared/objectt.md) | :heavy_minus_sign:                                      | The object type, always "list" for list responses.      | list                                                    |