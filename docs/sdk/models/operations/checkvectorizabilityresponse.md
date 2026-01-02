# CheckVectorizabilityResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  code: "invalid_api_key",
  message: "Invalid API key provided",
  param: "api_key",
  type: "invalid_request_error",
};
```

### `shared.VectorizabilityCheckResponse`

```typescript
const value: shared.VectorizabilityCheckResponse = {
  vectorizable: true,
};
```

