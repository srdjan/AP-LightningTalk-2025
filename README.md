# Teaching Your AI Agent the Art of Knowing Nothing (Sometimes)

A lightning talk presentation by Srdjan Strbanovic about building responsible AI agents that know when to admit uncertainty and escalate appropriately.

## 🚀 Quick Start

### Local Development
```bash
deno task dev
```
Visit http://localhost:8000

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
├── main.ts         # Deno server entry point
├── deno.json       # Deno configuration
├── index.html      # Complete presentation (standalone)
├── CLAUDE.md       # Development guide
└── README.md       # This file
```

## 🎯 Features

- **Zero Dependencies**: Single HTML file with embedded CSS/JS
- **Modern Stack**: Deno + Web Standards
- **Responsive**: Works on desktop, tablet, and mobile
- **Interactive**: Keyboard, mouse, and touch navigation
- **Accessible**: ARIA labels, screen reader support

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
3. **Rule 3: Escalate Like a Pro** - Immediate escalation for high-stakes situations

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
