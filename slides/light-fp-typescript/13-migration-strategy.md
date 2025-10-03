# Migration Strategy

## Adopt Light FP Gradually

**You don't need to rewrite everything!** {.fragment}

**Step 1:** Start with new features using Result types {.fragment}

**Step 2:** Extract pure functions from existing code {.fragment}

**Step 3:** Introduce ports for new external dependencies {.fragment}

**Step 4:** Add branded types for critical IDs {.fragment}

**Step 5:** Refactor hot paths to use immutable data {.fragment}

**Key:** Each step provides immediate value ✅ {.fragment}

<!-- NOTES: This is not an all-or-nothing approach. Start small. Pick one principle and apply it to new code. Gradually refactor existing code as you touch it. Each principle provides value independently. -->
