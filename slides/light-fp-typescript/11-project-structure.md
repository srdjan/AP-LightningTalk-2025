# Recommended Project Structure

## Organize by Architectural Boundaries

```
src/
  domain/       # Pure business logic (Result types, no I/O)
  ports/        # Interface definitions (Clock, Database, Http)
  adapters/     # Concrete implementations (Postgres, Redis, etc.)
  http/         # Web layer (routes, middleware, validation)
  app/          # Application composition (wire everything together)
```

**Key Benefits:** {.fragment}
- Clear separation of concerns {.fragment}
- Easy to find code {.fragment}
- Test domain logic in isolation {.fragment}
- Swap adapters without touching domain {.fragment}

<!-- NOTES: Structure reflects architecture. Domain is pure and has no external dependencies. Ports define capabilities. Adapters provide real implementations. HTTP layer validates input and handles responses. App layer wires it all together. -->
