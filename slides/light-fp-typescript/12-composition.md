# Function Composition

## Build Complex Logic from Simple Functions

**Compose Results:**
```typescript
const andThen = <T, E, U>(
  result: Result<T, E>,
  fn: (value: T) => Result<U, E>
): Result<U, E> =>
  result.ok ? fn(result.value) : result;

const map = <T, E, U>(
  result: Result<T, E>,
  fn: (value: T) => U
): Result<U, E> =>
  result.ok ? ok(fn(result.value)) : result;
```

**Chain operations:**
```typescript
const result = await createUser(email)
  |> andThen(user => sendWelcomeEmail(user))
  |> andThen(user => addToMailingList(user))
  |> map(user => ({ id: user.id, email: user.email }));
```

<!-- NOTES: Composition lets you build complex workflows from simple functions. These helpers let you chain Result-returning functions cleanly. Similar to promises but for Result types. -->
