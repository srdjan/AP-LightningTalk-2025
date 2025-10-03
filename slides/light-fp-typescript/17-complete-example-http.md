# Complete Example: HTTP Layer

## Handle Web Concerns Separately

```typescript
// HTTP layer
const createUserHandler = (createUser: CreateUserFn) =>
  async (req: Request): Promise<Response> => {
    const body = await req.json();

    // Validate input
    const emailResult = parseEmail(body.email);
    if (!emailResult.ok) {
      return Response.json(
        { error: "INVALID_EMAIL" },
        { status: 400 }
      );
    }

    // Call domain logic
    const result = await createUser(emailResult.value);

    // Map Result to HTTP response
    if (result.ok) {
      return Response.json(result.value, { status: 201 });
    }

    return Response.json(
      { error: result.error },
      { status: result.error === "EMAIL_TAKEN" ? 409 : 500 }
    );
  };
```

<!-- NOTES: HTTP layer handles validation, calling domain logic, and mapping Results to HTTP responses. Notice clean separation - domain knows nothing about HTTP. -->
