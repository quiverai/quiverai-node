# ColorRoles

Semantic mapping of colors to specific roles

## Example Usage

```typescript
import { ColorRoles } from "@quiverai/sdk/sdk/models/shared";

let value: ColorRoles = {
  accent: [
    "#12FBA2",
  ],
  background: [
    "#FFFFFF",
  ],
  primary: [
    "#1A1A1A",
  ],
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `accent`                                  | *string*[]                                | :heavy_minus_sign:                        | Accent colors for highlights and emphasis | [<br/>"#12FBA2"<br/>]                     |
| `background`                              | *string*[]                                | :heavy_minus_sign:                        | Colors allowed for background elements    | [<br/>"#FFFFFF"<br/>]                     |
| `metadata`                                | *string*[]                                | :heavy_minus_sign:                        | Arbitrary custom role colors              |                                           |
| `primary`                                 | *string*[]                                | :heavy_minus_sign:                        | Primary/main colors for key elements      | [<br/>"#1A1A1A"<br/>]                     |