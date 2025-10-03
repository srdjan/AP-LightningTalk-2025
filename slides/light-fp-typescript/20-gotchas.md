# Common Gotchas

## Pitfalls to Avoid

**Don't go overboard:** {.fragment}
- ❌ Not everything needs to be a branded type {.fragment}
- ❌ Local mutations inside functions are OK {.fragment}
- ❌ Don't abstract too early {.fragment}

**Practical compromises:** {.fragment}
- ✅ Use exceptions at system boundaries (HTTP, top-level errors) {.fragment}
- ✅ Mutate for performance in tight loops {.fragment}
- ✅ Mix paradigms when it makes sense {.fragment}

**Remember:** Light FP is pragmatic, not dogmatic {.fragment}

<!-- NOTES: Don't become a FP zealot. The goal is better code, not purity. Use these patterns where they provide value. Skip them where they don't. Pragmatism over dogma. -->
