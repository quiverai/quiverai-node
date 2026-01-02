# SVGEditDraftEvent

Streaming partial SVG chunks during editing.

## Example Usage

```typescript
import { SVGEditDraftEvent } from "@quiverai/sdk/sdk/models/shared";

let value: SVGEditDraftEvent = {
  data: {
    id: "svg-def456",
    svg: "<value>",
  },
  event: "svg_edit.draft",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [shared.SVGEditDraftEventData](../../../sdk/models/shared/svgeditdrafteventdata.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `event`                                                                             | *"svg_edit.draft"*                                                                  | :heavy_check_mark:                                                                  | N/A                                                                                 |