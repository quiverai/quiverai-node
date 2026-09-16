# AnimatedSvgResponse

## Example Usage

```typescript
import { AnimatedSvgResponse } from "@quiverai/sdk/sdk/models/shared";

let value: AnimatedSvgResponse = {
  loopPeriodMs: 1200,
  mimeType: "image/svg+xml",
  openingAnimationMs: 500,
  svg: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `loopPeriodMs`                                            | *number*                                                  | :heavy_minus_sign:                                        | Loop period for the generated animation in milliseconds.  | 1200                                                      |
| `mimeType`                                                | [shared.MimeType](../../../sdk/models/shared/mimetype.md) | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `openingAnimationMs`                                      | *number*                                                  | :heavy_minus_sign:                                        | Opening animation duration in milliseconds.               | 500                                                       |
| `svg`                                                     | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |                                                           |