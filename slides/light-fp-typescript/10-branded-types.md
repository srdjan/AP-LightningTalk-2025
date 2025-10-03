# Principle 5: Branded Types

## Prevent Primitive Obsession Bugs

**The Problem:**
```typescript
function transferMoney(from: number, to: number, amount: number) {
  // Easy to swap from/to/amount - all are just numbers!
}

transferMoney(amount, accountId, userId);  // Compiles! 💥
```

**The Solution:** {.fragment}
```typescript
type UserId = number & { readonly _brand: unique symbol };
type AccountId = number & { readonly _brand: unique symbol };

const toUserId = (id: number): UserId => id as UserId;
const toAccountId = (id: number): AccountId => id as AccountId;

function transfer(from: AccountId, to: AccountId, amount: number) {
  // Type-safe! Can't pass UserId where AccountId is expected
}
```

<!-- NOTES: Branded types give you stronger type safety at zero runtime cost. The brand is erased at compile time. Prevents entire classes of bugs where you mix up IDs. -->
