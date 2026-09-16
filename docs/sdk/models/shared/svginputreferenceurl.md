# SvgInputReferenceUrl

## Example Usage

```typescript
import { SvgInputReferenceUrl } from "@quiverai/sdk/sdk/models/shared";

let value: SvgInputReferenceUrl = {
  url: "https://example.com/uploads/source.svg",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `url`                                              | *string*                                           | :heavy_check_mark:                                 | Network SVG URL. Only http/https URLs are allowed. | https://example.com/uploads/source.svg             |