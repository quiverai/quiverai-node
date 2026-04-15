# SvgStreamEventData

The event payload. Shape depends on the `type` phase discriminator.


## Supported Types

### `shared.SvgContentEventData`

```typescript
const value: shared.SvgContentEventData = {
  id: "<id>",
  index: 0,
  svg: "<value>",
  type: "content",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

### `shared.SvgDraftEventData`

```typescript
const value: shared.SvgDraftEventData = {
  id: "<id>",
  index: 0,
  svg: "<value>",
  type: "draft",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

### `shared.SvgGeneratingEventData`

```typescript
const value: shared.SvgGeneratingEventData = {
  index: 0,
  type: "generating",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

### `shared.SvgReasoningEventData`

```typescript
const value: shared.SvgReasoningEventData = {
  index: 0,
  type: "reasoning",
  usage: {
    inputTokens: 1200,
    outputTokens: 440,
    totalTokens: 1640,
  },
};
```

