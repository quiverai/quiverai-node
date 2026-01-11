# Model

Describes a QuiverAI model offering that can be used with the API.
This schema is compatible with OpenAI SDK and OpenRouter.


## Example Usage

```typescript
import { Model } from "@quiverai/sdk/sdk/models/shared";

let value: Model = {
  contextLength: 128000,
  created: 1704067200,
  description: "Optimized for high-quality icon and illustration generation",
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `contextLength`                                                                                  | *number*                                                                                         | :heavy_minus_sign:                                                                               | Maximum context length in tokens.                                                                | 128000                                                                                           |
| `created`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | The Unix timestamp (in seconds) when the model was created.                                      | 1704067200                                                                                       |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | A description of the model and its capabilities.                                                 | Optimized for high-quality icon and illustration generation                                      |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The model identifier, which can be referenced in the API endpoints.                              | arrow-0.5                                                                                        |
| `inputModalities`                                                                                | [shared.Modality](../../../sdk/models/shared/modality.md)[]                                      | :heavy_minus_sign:                                                                               | Input modalities supported by the model.                                                         | [<br/>"text",<br/>"image"<br/>]                                                                  |
| `maxOutputLength`                                                                                | *number*                                                                                         | :heavy_minus_sign:                                                                               | Maximum output length in tokens.                                                                 | 16384                                                                                            |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Human-readable name of the model.                                                                | Arrow 0.5                                                                                        |
| `object`                                                                                         | [shared.ModelObject](../../../sdk/models/shared/modelobject.md)                                  | :heavy_minus_sign:                                                                               | The object type, always "model" for model objects.                                               | model                                                                                            |
| `outputModalities`                                                                               | [shared.Modality](../../../sdk/models/shared/modality.md)[]                                      | :heavy_minus_sign:                                                                               | Output modalities supported by the model.                                                        | [<br/>"svg"<br/>]                                                                                |
| `ownedBy`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | The organization that owns the model.                                                            | quiver                                                                                           |
| `pricing`                                                                                        | [shared.ModelPricing](../../../sdk/models/shared/modelpricing.md)                                | :heavy_minus_sign:                                                                               | Pricing information for the model (per token, in USD as strings to avoid floating point issues). |                                                                                                  |
| `supportedOperations`                                                                            | [shared.SupportedOperation](../../../sdk/models/shared/supportedoperation.md)[]                  | :heavy_minus_sign:                                                                               | API operations supported by this model.                                                          | [<br/>"chat_completions"<br/>]                                                                   |
| `supportedSamplingParameters`                                                                    | [shared.SamplingParameter](../../../sdk/models/shared/samplingparameter.md)[]                    | :heavy_minus_sign:                                                                               | Sampling parameters supported by the model.                                                      | [<br/>"temperature",<br/>"top_p",<br/>"stop",<br/>"frequency_penalty",<br/>"presence_penalty",<br/>"seed"<br/>] |