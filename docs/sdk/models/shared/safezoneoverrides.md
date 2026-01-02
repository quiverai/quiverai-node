# SafeZoneOverrides

Optional overrides for specific sides of the safe zone

## Example Usage

```typescript
import { SafeZoneOverrides } from "@quiverai/sdk/sdk/models/shared";

let value: SafeZoneOverrides = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `bottom`                         | *number*                         | :heavy_minus_sign:               | Override value for bottom margin |
| `left`                           | *number*                         | :heavy_minus_sign:               | Override value for left margin   |
| `right`                          | *number*                         | :heavy_minus_sign:               | Override value for right margin  |
| `top`                            | *number*                         | :heavy_minus_sign:               | Override value for top margin    |