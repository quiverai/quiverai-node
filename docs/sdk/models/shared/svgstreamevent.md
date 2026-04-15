# SvgStreamEvent

Server-sent event (SSE) envelope for SVG streaming operations. Each SSE message uses the `event:` line for the phase discriminator and the `data:` line for a JSON payload. For `n > 1`, events are interleaved: use `data.index` for output position and `data.id` as the stable per-output identifier. The stream terminates with `data: [DONE]`.


## Supported Types

### `shared.One`

```typescript
const value: shared.One = {
  data: {
    id: "<id>",
    svg: "<value>",
    type: "draft",
  },
  event: "generating",
};
```

### `shared.Two`

```typescript
const value: shared.Two = {
  data: {
    type: "reasoning",
  },
  event: "reasoning",
};
```

### `shared.Three`

```typescript
const value: shared.Three = {
  data: {
    type: "reasoning",
  },
  event: "draft",
};
```

### `shared.Four`

```typescript
const value: shared.Four = {
  data: {
    id: "<id>",
    svg: "<value>",
    type: "content",
  },
  event: "content",
};
```

