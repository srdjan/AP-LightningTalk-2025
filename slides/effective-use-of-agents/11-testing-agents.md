# Testing Agents

## How Do You Test Non-Determinism?

### Multi-Layer Strategy

<div style="margin-top: 1.5rem;">

**1. Unit Test Tools** {.fragment}
Test each tool independently (deterministic)

**2. Integration Test Workflows** {.fragment}
Mock the LLM, test tool orchestration

**3. End-to-End Eval Sets** {.fragment}
Real LLM calls against golden datasets

**4. Human Evaluation** {.fragment}
Spot-check outputs for quality/safety

</div>

### Metrics to Track

- **Task success rate** - Did it achieve the goal? {.fragment}
- **Tool call accuracy** - Right tools, right params? {.fragment}
- **Token efficiency** - Cost per successful task {.fragment}
- **Escalation rate** - How often does it ask for help? {.fragment}

<!-- NOTES: Testing agents is hard. Use deterministic tests where possible, statistical validation where not. -->
