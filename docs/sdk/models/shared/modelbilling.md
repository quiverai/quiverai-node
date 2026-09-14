# ModelBilling


## Supported Types

### `shared.FixedCreditModelBilling`

```typescript
const value: shared.FixedCreditModelBilling = {
  kind: "fixed_credit",
  unit: "credits_per_output",
};
```

### `shared.TokenUsageModelBilling`

```typescript
const value: shared.TokenUsageModelBilling = {
  currency: "USD",
  kind: "token_usage",
  pricingModel: "token_usage_v1",
  rates: {
    cacheWrite: 73184,
    cachedInput: 488710,
    input: 420022,
    output: 198579,
  },
  unit: "millicents_per_million_tokens",
};
```

