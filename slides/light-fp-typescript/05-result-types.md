# Principle 2: Result Types

## Make Errors Explicit and Type-Safe

**The Pattern:**
```typescript
type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

const ok = <T>(value: T): Result<T, never> =>
  ({ ok: true, value });

const err = <E>(error: E): Result<never, E> =>
  ({ ok: false, error });
```

**Why?** {.fragment}
- Errors are visible in the type signature {.fragment}
- Compiler forces you to handle errors {.fragment}
- No try-catch soup {.fragment}

<!-- NOTES: Result types make errors first-class citizens. You can't ignore them - the type system won't let you. This is like Rust's Result or Go's error returns, but in TypeScript. -->
