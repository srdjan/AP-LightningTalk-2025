# Light FP vs. Traditional FP Libraries

## Why Not fp-ts, Ramda, etc.?

| **Light FP** | **Heavy FP (fp-ts, etc.)** |
|--------------|----------------------------|
| ✅ Simple Result type | ❌ Either, Option, Task, IO, etc. |
| ✅ Plain functions | ❌ Functors, Monads, Applicatives |
| ✅ Easy onboarding | ❌ Steep learning curve |
| ✅ Readable to JS devs | ❌ Looks alien to most teams |
| ✅ Zero dependencies | ❌ Heavy library dependencies |
| ✅ Fast compilation | ❌ Slow TypeScript compilation |

**Use Light FP when:** Team values pragmatism, you want gradual adoption {.fragment}

**Use Heavy FP when:** Team is all-in on FP, academic correctness matters more than accessibility {.fragment}

<!-- NOTES: Heavy FP libraries are powerful but come with major trade-offs. Light FP gives you 80% of the benefits with 20% of the complexity. Choose based on your team's values and experience level. -->
