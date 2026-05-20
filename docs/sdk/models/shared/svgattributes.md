# SvgAttributes

Optional SVG root attributes requested by the caller.

## Example Usage

```typescript
import { SvgAttributes } from "@quiverai/sdk/sdk/models/shared";

let value: SvgAttributes = {
  viewBox: {
    height: 512,
    minX: 0,
    minY: 0,
    width: 512,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `viewBox`                                               | [shared.ViewBox](../../../sdk/models/shared/viewbox.md) | :heavy_minus_sign:                                      | SVG root viewBox attribute controls.                    |