# Principle 1: Pure Functions

## Same Input → Same Output, No Surprises

**Before:**
```typescript
let total = 0;
function addToCart(item: Item) {
  total += item.price;  // Hidden state mutation
  logToAnalytics(item); // Hidden side effect
  return total;
}
```

**After:**
```typescript
const calculateTotal = (items: Item[]): number =>
  items.reduce((sum, item) => sum + item.price, 0);
```

**Benefits:** Predictable, easily testable, no hidden dependencies {.fragment}

<!-- NOTES: Pure functions are the foundation. Same inputs always produce same outputs. No side effects. Easy to test - no mocks needed. -->
