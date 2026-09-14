# SvgStreamEventData

The event payload. Shape depends on the `type` phase discriminator.


## Supported Types

### `shared.SvgContentEventData`

```typescript
const value: shared.SvgContentEventData = {
  credits: 1,
  id: "<id>",
  index: 0,
  loopPeriodMs: 1200,
  openingAnimationMs: 500,
  svg: "<value>",
  type: "content",
  usage: {
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
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
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
  },
};
```

### `shared.PublicErrorSseEventData`

```typescript
const value: shared.PublicErrorSseEventData = {
  code: "server_error",
  message: "<value>",
  requestId: "<id>",
  status: 603625,
  type: "error",
};
```

### `shared.SvgGeneratingEventData`

```typescript
const value: shared.SvgGeneratingEventData = {
  index: 0,
  type: "generating",
  usage: {
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
  },
};
```

### `shared.SvgReasoningEventData`

```typescript
const value: shared.SvgReasoningEventData = {
  index: 0,
  type: "reasoning",
  usage: {
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
  },
};
```

