# Ports Make Testing Trivial

## No Mocking Frameworks Needed

**Production:**
```typescript
const systemClock: Clock = {
  now: () => new Date()
};

const realDb: Database = makePostgresDb(config);
const createUserProd = createUser(systemClock, realDb);
```

**Testing:**
```typescript
const testClock: Clock = {
  now: () => new Date("2024-01-01")
};

const fakeDb: Database = makeInMemoryDb();
const createUserTest = createUser(testClock, fakeDb);

// Test is pure and fast - no real DB, no mocks!
```

<!-- NOTES: This is the power of ports. Same business logic, different adapters. Tests are fast, deterministic, and don't need mocking frameworks. -->
