# SvgStreamEventData

The event payload. Shape depends on the `type` phase discriminator.


## Supported Types

### `shared.SvgContentEventData`

```typescript
const value: shared.SvgContentEventData = {
  credits: 1,
  id: "<id>",
  index: 0,
  svg: "<value>",
  type: "content",
};
```

### `shared.SvgDraftEventData`

```typescript
const value: shared.SvgDraftEventData = {
  id: "<id>",
  index: 0,
  svg: "<value>",
  type: "draft",
};
```

### `shared.SvgGeneratingEventData`

```typescript
const value: shared.SvgGeneratingEventData = {
  index: 0,
  type: "generating",
};
```

### `shared.SvgReasoningEventData`

```typescript
const value: shared.SvgReasoningEventData = {
  index: 0,
  type: "reasoning",
};
```

