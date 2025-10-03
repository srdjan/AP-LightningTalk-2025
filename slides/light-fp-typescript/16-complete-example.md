# Complete Example: User Registration

## Putting It All Together

```typescript
// Domain (pure logic)
type CreateUserError = "EMAIL_TAKEN" | "INVALID_EMAIL" | "DB_ERROR";

const createUser = (clock: Clock, db: Database) =>
  async (email: Email): Promise<Result<User, CreateUserError>> => {
    const existing = await db.findByEmail(email);
    if (existing) return err("EMAIL_TAKEN");

    const user: User = {
      id: crypto.randomUUID() as UserId,
      email,
      createdAt: clock.now()
    };

    const saved = await db.save(user);
    return saved.ok ? ok(user) : err("DB_ERROR");
  };
```

<!-- NOTES: Notice: ports injected (clock, db), branded types (Email, UserId), Result type for errors, pure logic with no side effects in the domain layer. -->
