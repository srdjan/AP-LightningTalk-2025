# Context Management

## The Agent's Working Memory

### The Challenge

- LLMs have **token limits** (200K for Claude 3.5 Sonnet) {.fragment}
- Not all context is equally important {.fragment}
- Context = Cost (both $ and latency) {.fragment}

### Best Practices

<div style="margin-top: 1rem;">

1. **Prioritize recency** - Keep recent interactions, summarize old ones {.fragment}
2. **Use retrieval** - Fetch relevant docs/code on-demand {.fragment}
3. **Compress aggressively** - Remove redundant information {.fragment}
4. **Separate task context from system context** {.fragment}

</div>

<!-- NOTES: Context window is your most precious resource. Treat it like RAM in embedded systems. -->
