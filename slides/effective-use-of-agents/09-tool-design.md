# Tool Design

## The Agent's Interface to the World

### Principles for Good Tools

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1.5rem;">

<div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem;">

**1. Single Responsibility**
One tool, one job

</div>

<div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem;">

**2. Clear Inputs/Outputs**
Typed, validated, documented

</div>

<div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem;">

**3. Idempotent When Possible**
Same input = same output

</div>

<div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem;">

**4. Rich Error Messages**
Tell the agent how to fix it

</div>

</div>

### Example: Bad vs Good

```typescript
// ❌ Bad: Vague, no validation
async function updateUser(data: any) { ... }

// ✅ Good: Clear contract, typed, validated
async function updateUserEmail(userId: string, newEmail: Email): Result<User, UpdateError>
```

<!-- NOTES: Tools are your agent's only way to affect the world. Design them with care. -->
