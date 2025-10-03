# Common Patterns Reference

## Your Light FP Toolkit

**Error Handling:**
```typescript
Result<T, E>  // Make errors explicit
ok(value)     // Success constructor
err(error)    // Error constructor
andThen()     // Chain operations
map()         // Transform success values
```

**Type Safety:**
```typescript
type BrandedId = number & { readonly _brand: unique symbol }
readonly / Readonly<T>  // Enforce immutability
```

**Dependency Management:**
```typescript
interface Port { ... }  // Define capability
(port: Port) => logic   // Inject dependency
```

**Keep these patterns simple and consistent across your codebase** ✅ {.fragment}

<!-- NOTES: These are your core patterns. Keep them simple. Consistency matters more than cleverness. Document them in your team's style guide. -->
