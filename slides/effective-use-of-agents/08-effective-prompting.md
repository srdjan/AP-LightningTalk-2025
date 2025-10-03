# Effective Prompting for Agents

## System Prompts That Work

### Structure Your Instructions

```markdown
# Role & Constraints
You are a [specific role] that can [capabilities] but cannot [limitations].

# Available Tools
- tool_name: What it does, when to use it
- another_tool: ...

# Decision Framework
When [condition], you should [action].
When uncertain, [escalation path].

# Output Format
Always respond with [structured format].
```

### Key Elements

- **Explicit constraints** prevent scope creep {.fragment}
- **Tool usage examples** improve accuracy {.fragment}
- **Decision trees** handle edge cases {.fragment}
- **Output schemas** enable validation {.fragment}

<!-- NOTES: System prompts are code. Version them, test them, iterate on them. -->
