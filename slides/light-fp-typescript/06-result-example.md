# Result Types in Action

## Real-World Example

```typescript
type CreateUserError =
  | "EMAIL_TAKEN"
  | "INVALID_EMAIL"
  | "DB_ERROR";

const createUser = async (
  email: string
): Promise<Result<User, CreateUserError>> => {
  if (!isValidEmail(email)) {
    return err("INVALID_EMAIL");
  }

  const existing = await findUserByEmail(email);
  if (existing) {
    return err("EMAIL_TAKEN");
  }

  const user = await saveUser({ email });
  return ok(user);
};
```

**The caller must handle all possible errors** ✅ {.fragment}

<!-- NOTES: Notice how the return type tells you exactly what can go wrong. No surprises. No hidden exceptions. The compiler ensures you handle each case. -->
