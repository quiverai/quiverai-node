# SvgStreamEvent

Server-sent event (SSE) envelope for SVG streaming operations. Each SSE message uses the `event:` line for the phase discriminator and the `data:` line for a JSON payload. For `n > 1`, events are interleaved: use `data.index` for output position and `data.id` as the stable per-output identifier. Terminal failures emit `event: error` with public error data. The stream terminates with `data: [DONE]`.


## Supported Types

### `shared.SvgStreamEvent1`

```typescript
const value: shared.SvgStreamEvent1 = {
  data: {
    code: "request_timeout",
    message: "<value>",
    requestId: "<id>",
    status: 886719,
    type: "error",
  },
  event: "error",
};
```

### `shared.SvgStreamEvent2`

```typescript
const value: shared.SvgStreamEvent2 = {
  data: {
    type: "generating",
  },
  event: "generating",
};
```

### `shared.Three`

```typescript
const value: shared.Three = {
  data: {
    type: "reasoning",
  },
  event: "reasoning",
};
```

### `shared.Four`

```typescript
const value: shared.Four = {
  data: {
    id: "<id>",
    svg: "<value>",
    type: "draft",
  },
  event: "draft",
};
```

### `shared.Five`

```typescript
const value: shared.Five = {
  data: {
    type: "reasoning",
  },
  event: "content",
};
```

