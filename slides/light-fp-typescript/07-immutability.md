# Principle 3: Immutable Data

## Prevent Mutation, Create New Values

**Before:**
```typescript
function updateUser(user: User, name: string) {
  user.name = name;  // Mutates original!
  user.updatedAt = new Date();
  return user;
}
```

**After:**
```typescript
const updateUser = (
  user: Readonly<User>,
  name: string
): User => ({
  ...user,
  name,
  updatedAt: new Date()
});
```

**Benefits:** No unexpected mutations, easier debugging, safer concurrency {.fragment}

<!-- NOTES: Immutability prevents bugs from mutations you didn't expect. Use readonly types to enforce this at compile time. Create new objects instead of modifying existing ones. -->
