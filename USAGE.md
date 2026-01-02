<!-- Start SDK Example Usage [usage] -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.models.listModels();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->