# Testing Example

## Pure, Fast, No Mocks

```typescript
// Test setup
const testClock: Clock = {
  now: () => new Date("2024-01-01T00:00:00Z")
};

const testDb: Database = makeInMemoryDb();

const createUserTest = createUser(testClock, testDb);

// Test
Deno.test("createUser - succeeds with valid email", async () => {
  const email = "test@example.com" as Email;
  const result = await createUserTest(email);

  assert(result.ok);
  assertEquals(result.value.email, email);
  assertEquals(
    result.value.createdAt,
    new Date("2024-01-01T00:00:00Z")
  );
});

Deno.test("createUser - fails when email taken", async () => {
  const email = "taken@example.com" as Email;
  await testDb.save({ email });

  const result = await createUserTest(email);

  assert(!result.ok);
  assertEquals(result.error, "EMAIL_TAKEN");
});
```

<!-- NOTES: Tests are deterministic, fast, and require no complex setup. Fake implementations are simple - just plain objects. No mocking frameworks needed. -->
