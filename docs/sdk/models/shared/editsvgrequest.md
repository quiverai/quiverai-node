# EditSVGRequest

SVG edit request with exactly one non-null source.


## Supported Types

### `shared.One`

```typescript
const value: shared.One = {
  maxReviewSteps: 2,
  model: "Fiesta",
  prompt: "Make the mark bolder and simplify the star points.",
  reasoningEffort: "medium",
  referenceImages: null,
  settings: {
    maxOutputTokens: 4096,
    orchestratorMaxOutputTokens: 4096,
    shallowMaxOutputTokens: 2048,
    temperature: 0.4,
  },
  svg:
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2l8 20H4z\"/></svg>",
};
```

### `shared.Two`

```typescript
const value: shared.Two = {
  maxReviewSteps: 2,
  model: "Model Y",
  prompt: "Make the mark bolder and simplify the star points.",
  reasoningEffort: "medium",
  referenceImages: null,
  settings: {
    maxOutputTokens: 4096,
    orchestratorMaxOutputTokens: 4096,
    shallowMaxOutputTokens: 2048,
    temperature: 0.4,
  },
  svgSource: {
    url: "https://example.com/uploads/source.svg",
  },
};
```

