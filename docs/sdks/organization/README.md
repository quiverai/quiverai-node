# Organization

## Overview

Read organization-level account information.

### Available Operations

* [getOrganizationBalance](#getorganizationbalance) - Get Organization Balance

## getOrganizationBalance

Requires an admin API key with billing_read or * authority. Returns the authenticated organization's spendable credits across all projects. Pending reservations, expired funding, and refunds are excluded. The balance is a JSON number with up to three fractional digits; very large balances may lose floating-point precision. This is a snapshot and may change after the response. The organization's request-rate limit applies and may return 429.

### Example Usage: apiKeyAuthorizationHeaderMissing

<!-- UsageSnippet language="typescript" operationID="getOrganizationBalance" method="get" path="/v1/organization/balance" example="apiKeyAuthorizationHeaderMissing" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.organization.getOrganizationBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { organizationGetOrganizationBalance } from "@quiverai/sdk/funcs/organizationGetOrganizationBalance.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationGetOrganizationBalance(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationGetOrganizationBalance failed:", res.error);
  }
}

run();
```
### Example Usage: apiKeyBearerTokenRequired

<!-- UsageSnippet language="typescript" operationID="getOrganizationBalance" method="get" path="/v1/organization/balance" example="apiKeyBearerTokenRequired" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.organization.getOrganizationBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { organizationGetOrganizationBalance } from "@quiverai/sdk/funcs/organizationGetOrganizationBalance.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationGetOrganizationBalance(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationGetOrganizationBalance failed:", res.error);
  }
}

run();
```
### Example Usage: apiKeyOrganizationMetadataInvalid

<!-- UsageSnippet language="typescript" operationID="getOrganizationBalance" method="get" path="/v1/organization/balance" example="apiKeyOrganizationMetadataInvalid" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.organization.getOrganizationBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { organizationGetOrganizationBalance } from "@quiverai/sdk/funcs/organizationGetOrganizationBalance.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationGetOrganizationBalance(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationGetOrganizationBalance failed:", res.error);
  }
}

run();
```
### Example Usage: invalidApiKey

<!-- UsageSnippet language="typescript" operationID="getOrganizationBalance" method="get" path="/v1/organization/balance" example="invalidApiKey" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.organization.getOrganizationBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { organizationGetOrganizationBalance } from "@quiverai/sdk/funcs/organizationGetOrganizationBalance.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationGetOrganizationBalance(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationGetOrganizationBalance failed:", res.error);
  }
}

run();
```
### Example Usage: organizationAuthenticationFailed

<!-- UsageSnippet language="typescript" operationID="getOrganizationBalance" method="get" path="/v1/organization/balance" example="organizationAuthenticationFailed" -->
```typescript
import { QuiverAI } from "@quiverai/sdk";

const quiverAI = new QuiverAI({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await quiverAI.organization.getOrganizationBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QuiverAICore } from "@quiverai/sdk/core.js";
import { organizationGetOrganizationBalance } from "@quiverai/sdk/funcs/organizationGetOrganizationBalance.js";

// Use `QuiverAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const quiverAI = new QuiverAICore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await organizationGetOrganizationBalance(quiverAI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationGetOrganizationBalance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOrganizationBalanceResponse](../../sdk/models/operations/getorganizationbalanceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |