# QuiverMessage


## Supported Types

### `shared.CreateSVGRequest`

```typescript
const value: shared.CreateSVGRequest = {
  input: {
    instructions: "Create a minimal, modern icon",
    prompt: "Generate an icon of a unicorn",
    references: [
      {
        url: "https://example.com/uploads/reference1.png",
      },
    ],
  },
  maxOutputTokens: 2560,
  model: "arrow-0.5",
  svgParams: {
    canvas: {
      safeZone: {},
      viewBox: {},
    },
    constraints: {
      maxElements: 128,
      maxPaths: 64,
      maxPointsPerPath: 256,
    },
    design: {
      colors: {
        palette: [
          "#12FBA2",
          "#1A1A1A",
          "#FFFFFF",
        ],
        roles: {
          accent: [
            "#12FBA2",
          ],
          background: [
            "#FFFFFF",
          ],
          primary: [
            "#1A1A1A",
          ],
        },
      },
      stylePreset: "outline",
    },
  },
  temperature: 0.8,
};
```

### `shared.EditSVGRequest`

```typescript
const value: shared.EditSVGRequest = {
  input: {
    instructions: "Create a minimal, modern icon",
    prompt: "Generate an icon of a unicorn",
    references: [
      {
        url: "https://example.com/uploads/reference1.png",
      },
    ],
    source: "<svg xmlns=\"http://www.w3.org/2000/svg\">...</svg>",
  },
  maxOutputTokens: 2560,
  model: "arrow-0.5",
  svgParams: {
    canvas: {
      safeZone: {},
      viewBox: {},
    },
    constraints: {
      maxElements: 128,
      maxPaths: 64,
      maxPointsPerPath: 256,
    },
    design: {
      colors: {
        palette: [
          "#12FBA2",
          "#1A1A1A",
          "#FFFFFF",
        ],
        roles: {
          accent: [
            "#12FBA2",
          ],
          background: [
            "#FFFFFF",
          ],
          primary: [
            "#1A1A1A",
          ],
        },
      },
      stylePreset: "outline",
    },
  },
  temperature: 0.8,
};
```

