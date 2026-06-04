# ImageInputReference

Image input reference. Accepts a network image URL or a base64-encoded image payload. Decoded images must be no larger than 12582912 bytes, 4096x4096 pixels, or 16777216 total pixels. Accepted direct media types: image/png, image/jpeg, image/webp, image/gif, image/svg+xml.


## Supported Types

### `shared.ImageInputReferenceUrl`

```typescript
const value: shared.ImageInputReferenceUrl = {
  url: "https://example.com/uploads/reference1.png",
};
```

### `shared.ImageInputReferenceBase64`

```typescript
const value: shared.ImageInputReferenceBase64 = {
  base64:
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
};
```

