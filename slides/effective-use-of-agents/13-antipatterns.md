# Antipatterns to Avoid

## Common Mistakes

<div style="display: grid; gap: 1rem; margin-top: 1.5rem;">

### ❌ The Swiss Army Agent
**Problem**: One agent does everything
**Fix**: Specialized agents with clear domains {.fragment}

---

### ❌ The Black Box
**Problem**: No logging or observability
**Fix**: Log every decision, tool call, and error {.fragment}

---

### ❌ The Yes-Man
**Problem**: Never admits uncertainty
**Fix**: Explicit confidence thresholds for escalation {.fragment}

---

### ❌ The Chatty Agent
**Problem**: Wastes tokens on unnecessary explanations
**Fix**: Structured outputs, only speak when needed {.fragment}

</div>

<!-- NOTES: These are all real mistakes I've seen (and made) in production systems. -->
