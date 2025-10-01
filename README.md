# Teaching Your AI Agent the Art of Knowing Nothing (Sometimes)

A lightning talk presentation by Srdjan Strbanovic about building responsible AI
agents that know when to admit uncertainty and escalate appropriately.

## 🚀 Quick Start

### Local Development

```bash
deno task dev
```

Visit http://localhost:8000 (or your chosen port)

### Production Server

```bash
deno task start
```

### Deploy to Deno Deploy

1. **Install Deno Deploy CLI** (if not already installed):

```bash
deno install -A --global jsr:@deno/deployctl
```

2. **Deploy to Deno Deploy**:

```bash
deployctl deploy
```

Or use the GitHub integration:

1. Push this repo to GitHub
2. Connect your repo to [Deno Deploy](https://dash.deno.com/new)
3. Select `main.ts` as the entry point
4. Deploy!

## 📁 Project Structure

```
.
├── presentation.html          # HTML shell (entry)
├── assets/
│   ├── lib/
│   │   └── presentation.js    # Presentation engine (JS)
│   └── themes/
│       └── theme.css          # Base theme variables/styles
├── slides/
│   ├── manifest.json          # Slide order
│   ├── 01-title.md
│   └── ...
├── deno.json                  # Deno tasks and deploy config
├── main.ts                    # Deno HTTP server (serves static assets)
├── README.md
└── CLAUDE.md
```

## 🎯 Features

- **Zero build, no external dependencies**: Vanilla JS/CSS, no bundlers
- **Modular, Markdown-driven slides**: One .md per slide, manifest-controlled
  order
- **Responsive**: Desktop, tablet, and mobile
- **Interactive**: Keyboard, mouse, touch, and deep-linking
- **Accessible**: ARIA, focus-visible outlines, screen reader announcements
- **Utilities**: Copy-to-clipboard on code blocks, Help overlay, Speaker notes

## 🎨 Navigation

- **Next slide**: → (arrow), Space, or click right
- **Previous slide**: ← (arrow) or click left
- **Jump to slide**: Click progress dots
- **Help**: Press `H`
- **Speaker notes**: Press `S`
- **First/Last**: Home/End keys

## 📝 Content Overview

The presentation covers a framework for building responsible AI agents:

1. **Rule 1: No Cape, No Crime** - Full autonomy for low-stakes scenarios
2. **Rule 2: Show Your Work** - Propose & confirm for medium-stakes decisions
3. **Rule 3: Escalate Like a Pro** - Immediate escalation for high-stakes
   situations

Includes:

- The "Intern Test" metaphor
- Real-world examples and anti-patterns
- Copy-pasteable prompt template
- Before/after metrics
- Actionable next steps

## 🔗 Connect

- **Website**: https://srdjan.github.io/
- **GitHub**: https://github.com/srdjan
- **LinkedIn**: https://www.linkedin.com/in/ssrdjan/
- **X**: https://x.com/djidja8
- **Blog**: https://blogo.timek.deno.net

## 📄 License

© 2025 Srdjan Strbanovic. All rights reserved.

## 🧩 Modular Architecture (New)

This project has been refactored from a single-file HTML into a modular,
Markdown-driven deck.

Structure:

```
.
├── presentation.html      # HTML shell (renders slides from /slides)
├── assets/
│   ├── lib/
│   │   └── presentation.js   # All JS logic (engine)
│   └── themes/
│       └── theme.css         # Base theme variables/styles
├── slides/                  # One Markdown file per slide
│   ├── manifest.json        # Slide order
│   ├── 01-title.md
│   ├── 02-outline.md
│   └── ...
└── main.ts                  # Static file server (serves presentation + assets)
```

Slide authoring:

- Each slide is a `.md` file
- Use `{.fragment}` at end of a list item to reveal progressively
- Speaker notes: add an HTML comment at the bottom: `<!-- NOTES: ... -->`
- Raw HTML is allowed for special layouts and inline SVG

Theme:

- Edit colors, fonts, and animation variables in `assets/themes/theme.css`

Run:

```bash
# Dev server (default port 8000)
deno task dev

# Or choose a custom port (pass through extra args after --)
deno task dev -- --port=8010

# Then visit http://localhost:8000 (or your chosen port)
```

Deep links and navigation still work:

- `#N` to jump to slide N
- Keyboard: ←/→, Space, Home/End, H (help), S (speaker notes)
- Mouse thirds and touch swipe

Testing checklist (post-refactor):

- [ ] Slides render with styling
- [ ] Keyboard/mouse/touch/progress dots/deep links function
- [ ] Fragments (items with `{.fragment}`) reveal step-by-step
- [ ] Speaker notes dialog shows `<!-- NOTES: ... -->`
- [ ] Help overlay works (H)
- [ ] Copy-to-clipboard button appears on code blocks
- [ ] SVG and custom HTML layouts display properly
