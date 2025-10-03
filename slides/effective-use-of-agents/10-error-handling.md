# Error Handling

## When Things Go Wrong (And They Will)

### Error Categories

<div style="margin-top: 1.5rem;">

| Type | Agent Response | Example |
|------|----------------|---------|
| **Retryable** | Retry with backoff | Network timeout |
| **Fixable** | Adjust & retry | Invalid parameter format |
| **Escalatable** | Ask human | Ambiguous requirement |
| **Fatal** | Stop & report | Permission denied |

</div>

### Design for Failure

```typescript
type AgentError =
  | { type: "RETRY"; after: number }
  | { type: "FIX"; suggestion: string }
  | { type: "ESCALATE"; question: string }
  | { type: "FATAL"; reason: string };
```

<!-- NOTES: Errors are information. A good agent uses them to improve its next action. -->
