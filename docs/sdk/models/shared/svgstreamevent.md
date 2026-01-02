# SVGStreamEvent

Streaming event for SVG operations (SSE format).
Events flow in up to three phases:
1. `*.reasoning` - Model thinking about design approach (generate/edit/animate only)
2. `*.draft` - Streaming partial SVG chunks as generated
3. `*.content` - Final postprocessed, optimized SVG



## Supported Types

### `shared.SVGAnimateContentEvent`

```typescript
const value: shared.SVGAnimateContentEvent = {
  data: {
    id: "svg-ghi789",
    svg: "<value>",
    usage: {
      inputTokens: 256,
      inputTokensDetails: {
        imageTokens: 128,
        svgTokens: 128,
        textTokens: 128,
      },
      outputTokens: 768,
      outputTokensDetails: {
        svgTokens: 768,
      },
      totalTokens: 1024,
    },
  },
  event: "svg_animate.content",
};
```

### `shared.SVGAnimateDraftEvent`

```typescript
const value: shared.SVGAnimateDraftEvent = {
  data: {
    id: "svg-ghi789",
    svg: "<value>",
  },
  event: "svg_animate.draft",
};
```

### `shared.SVGAnimateReasoningEvent`

```typescript
const value: shared.SVGAnimateReasoningEvent = {
  data: {
    id: "svg-ghi789",
    text: "<value>",
  },
  event: "svg_animate.reasoning",
};
```

### `shared.SVGEditContentEvent`

```typescript
const value: shared.SVGEditContentEvent = {
  data: {
    id: "svg-def456",
    svg: "<value>",
    usage: {
      inputTokens: 256,
      inputTokensDetails: {
        imageTokens: 128,
        svgTokens: 128,
        textTokens: 128,
      },
      outputTokens: 768,
      outputTokensDetails: {
        svgTokens: 768,
      },
      totalTokens: 1024,
    },
  },
  event: "svg_edit.content",
};
```

### `shared.SVGEditDraftEvent`

```typescript
const value: shared.SVGEditDraftEvent = {
  data: {
    id: "svg-def456",
    svg: "<value>",
  },
  event: "svg_edit.draft",
};
```

### `shared.SVGEditReasoningEvent`

```typescript
const value: shared.SVGEditReasoningEvent = {
  data: {
    id: "svg-def456",
    text: "<value>",
  },
  event: "svg_edit.reasoning",
};
```

### `shared.SVGGenerateContentEvent`

```typescript
const value: shared.SVGGenerateContentEvent = {
  data: {
    id: "svg-abc123",
    svg: "<value>",
    usage: {
      inputTokens: 256,
      inputTokensDetails: {
        imageTokens: 128,
        svgTokens: 128,
        textTokens: 128,
      },
      outputTokens: 768,
      outputTokensDetails: {
        svgTokens: 768,
      },
      totalTokens: 1024,
    },
  },
  event: "svg_generate.content",
};
```

### `shared.SVGGenerateDraftEvent`

```typescript
const value: shared.SVGGenerateDraftEvent = {
  data: {
    id: "svg-abc123",
    svg: "<value>",
  },
  event: "svg_generate.draft",
};
```

### `shared.SVGGenerateReasoningEvent`

```typescript
const value: shared.SVGGenerateReasoningEvent = {
  data: {
    id: "svg-abc123",
    text: "<value>",
  },
  event: "svg_generate.reasoning",
};
```

### `shared.SVGVectorizeContentEvent`

```typescript
const value: shared.SVGVectorizeContentEvent = {
  data: {
    id: "svg-xyz789",
    svg: "<value>",
    usage: {
      inputTokens: 256,
      inputTokensDetails: {
        imageTokens: 128,
        svgTokens: 128,
        textTokens: 128,
      },
      outputTokens: 768,
      outputTokensDetails: {
        svgTokens: 768,
      },
      totalTokens: 1024,
    },
  },
  event: "svg_vectorize.content",
};
```

### `shared.SVGVectorizeDraftEvent`

```typescript
const value: shared.SVGVectorizeDraftEvent = {
  data: {
    id: "svg-xyz789",
    svg: "<value>",
  },
  event: "svg_vectorize.draft",
};
```

