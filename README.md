# Lightning Talks by Srdjan Strbanovic

A collection of lightning talk presentations about AI agents and prompt engineering.

## 🚀 Quick Start

### Local Development

```bash
deno task dev
```

Visit http://localhost:8000 to see the **presentation selection homepage** where you can choose from available talks and select your preferred theme.

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
├── index.html                 # Homepage with presentation selector + theme switcher
├── presentation.html          # Presentation viewer (generic, loads slides via query param)
├── main.ts                    # Deno HTTP server (serves static assets)
├── assets/
│   ├── lib/
│   │   └── presentation.js    # Presentation engine (navigation, rendering, themes)
│   └── themes/
│       ├── theme.css          # Base theme variables/styles
│       ├── dark.css           # Dark theme (default)
│       ├── light.css          # Light theme
│       ├── cyberpunk.css      # Cyberpunk theme
│       ├── ocean.css          # Ocean theme
│       ├── forest.css         # Forest theme
│       └── sunset.css         # Sunset theme
├── slides/
│   ├── prompt-optimization/   # First presentation
│   │   ├── manifest.json      # Slide order
│   │   ├── 01-title.md
│   │   └── ...
│   └── effective-use-of-agents/ # Second presentation
│       ├── manifest.json
│       ├── 01-title.md
│       └── ...
├── deno.json                  # Deno tasks and deploy config
├── README.md
└── CLAUDE.md
```

## 🎯 Features

- **Multi-presentation support**: Homepage lets you select from multiple talks
- **Theme switcher**: 6 themes (dark, light, cyberpunk, ocean, forest, sunset) with localStorage persistence
- **Zero build, no external dependencies**: Vanilla JS/CSS, no bundlers
- **Modular, Markdown-driven slides**: One .md per slide, manifest-controlled order
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

## 📝 Available Presentations

### 1. Prompt Optimization 🎯
**Teaching Your AI Agent the Art of Knowing Nothing (Sometimes)**

A framework for building responsible AI agents that know when to admit uncertainty and escalate appropriately.

- Rule 1: No Cape, No Crime (full autonomy for low-stakes)
- Rule 2: Show Your Work (propose & confirm for medium-stakes)
- Rule 3: Escalate Like a Pro (immediate escalation for high-stakes)
- The "Intern Test" metaphor
- Copy-pasteable prompt template
- Real-world metrics and examples

### 2. Effective Use of Agents 🤖
**Building Autonomous Systems That Actually Work**

Core principles, practical patterns, and real-world examples for designing AI agents with the right level of autonomy, observability, and human oversight.

- When (and when not) to use agents
- The autonomy spectrum
- Context management and effective prompting
- Tool design and error handling
- Testing strategies and antipatterns
- Production deployment checklist

## 🔗 Connect

- **Website**: https://srdjan.github.io/
- **GitHub**: https://github.com/srdjan
- **LinkedIn**: https://www.linkedin.com/in/ssrdjan/
- **X**: https://x.com/djidja8
- **Blog**: https://blogo.timek.deno.net

## 📄 License

© 2025 Srdjan Strbanovic. All rights reserved.

## 🧩 Architecture

This project uses a **two-file architecture** for multi-presentation support:

### 1. Homepage (`index.html`)
**URL**: `http://localhost:8000/`

The landing page where users:
- Browse available presentations via visual cards
- Select a theme (6 options: dark, light, cyberpunk, ocean, forest, sunset)
- Click a presentation card to launch it

Features:
- Responsive grid layout with glassmorphism effects
- Theme preference saved to `localStorage` as `"preferred-theme"`
- Minimal, elegant design

### 2. Presentation Viewer (`presentation.html`)
**URL**: `http://localhost:8000/presentation.html?slides=FOLDER_NAME`

A generic slide viewer that:
- Reads the `?slides=` query parameter to determine which presentation to load
- Fetches slides from `slides/FOLDER_NAME/manifest.json`
- Applies the saved theme from `localStorage` on load
- Provides navigation, fragments, speaker notes, and keyboard shortcuts

Examples:
- `presentation.html?slides=prompt-optimization`
- `presentation.html?slides=effective-use-of-agents`

**How they work together**:
1. User visits `/` → sees homepage (`index.html`)
2. User selects a theme and clicks a presentation card
3. Browser navigates to `presentation.html?slides=FOLDER_NAME`
4. Viewer loads that presentation's slides and applies the saved theme

### Adding a New Presentation

1. **Create a folder** in `slides/`:
   ```bash
   mkdir slides/my-new-talk
   ```

2. **Create slides** as Markdown files (`01-title.md`, `02-intro.md`, etc.)
   - Use `{.fragment}` at end of list items for progressive reveal
   - Add speaker notes: `<!-- NOTES: Your private notes -->`
   - Raw HTML is allowed for custom layouts

3. **Create manifest.json**:
   ```json
   [
     "01-title.md",
     "02-intro.md",
     "03-content.md"
   ]
   ```

4. **Add to homepage** (`index.html`):
   ```html
   <a href="presentation.html?slides=my-new-talk" class="card">
     <div class="card-content">
       <span class="card-icon">🎤</span>
       <h2>My New Talk</h2>
       <p>Description here</p>
       <div class="card-meta">
         <span>10 slides</span>
         <span>~15 min</span>
       </div>
     </div>
   </a>
   ```

### Theming

- Edit base variables: `assets/themes/theme.css`
- Create new themes by copying an existing theme file (e.g., `dark.css`)
- All themes use CSS custom properties (`--primary`, `--bg`, `--text`, etc.)
- Theme preference saved to localStorage as `"preferred-theme"`
