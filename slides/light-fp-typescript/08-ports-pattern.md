# Principle 4: Ports Pattern

## Decouple Logic from Effects

**The Problem:** Business logic mixed with databases, HTTP, time, crypto {.fragment}

**The Solution:** Inject capabilities as interfaces {.fragment}

```typescript
// Define the port (interface)
interface Clock {
  readonly now: () => Date;
}

// Pure business logic
const createUser = (clock: Clock, db: Database) =>
  async (email: string): Promise<Result<User, Error>> => {
    const user = {
      email,
      createdAt: clock.now()  // Injected dependency
    };
    return await db.save(user);
  };
```

<!-- NOTES: Ports pattern is dependency injection done right. Business logic receives capabilities as simple interfaces. No framework needed. Easy to test with fake implementations. -->
