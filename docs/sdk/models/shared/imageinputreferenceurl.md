# ImageInputReferenceUrl

## Example Usage

```typescript
import { ImageInputReferenceUrl } from "@quiverai/sdk/sdk/models/shared";

let value: ImageInputReferenceUrl = {
  url: "https://example.com/uploads/reference1.png",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `url`                                                | *string*                                             | :heavy_check_mark:                                   | Network image URL. Only http/https URLs are allowed. | https://example.com/uploads/reference1.png           |