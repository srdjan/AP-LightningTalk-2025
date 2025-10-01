# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About the Author

**Srdjan Strbanovic** - Transformational Technology Leader, NYC Tri-State Area

Professional background:
- SVP Architecture @ First Advantage
- Co-Founder/CTO @ KlinchIt.app
- Chief Architect @ Lifion by ADP
- Principal Architect @ ThoughtWorks
- CTO @ Cignium

Connect:
- Website: https://srdjan.github.io/
- GitHub: https://github.com/srdjan
- LinkedIn: https://www.linkedin.com/in/ssrdjan/
- X: https://x.com/djidja8
- Blog: https://blogo.timek.deno.dev

## Repository Overview

This is a **modular, Markdown-driven HTML presentation** repository for a lightning talk titled **"Teaching Your AI Agent the Art of Knowing Nothing (Sometimes)"** by Srdjan Strbanovic.

**Talk Abstract**: A practical framework for building AI agents that know when to admit uncertainty, escalate appropriately, and avoid the pitfalls of overconfidence. Uses the "Intern Test" metaphor to teach responsible AI agent design with clear decision boundaries and escalation paths.

## Architecture

### Modular Slide System

The project has evolved from a single-file HTML presentation into a modular architecture where:

1. **Slides are Markdown files** - Each slide is a separate `.md` file in `/slides/`
2. **Runtime rendering** - JavaScript fetches and parses Markdown into HTML at runtime
3. **Centralized theming** - CSS custom properties in `theme.css` define all visual styles
4. **Static file server** - Deno serves the presentation and assets via `main.ts`

```
presentation.html      # Generic presentation engine (HTML skeleton + JS)
    ↓
theme.css             # CSS custom properties (colors, fonts, spacing, animations)
    ↓
slides/manifest.json  # Ordered list of slide filenames
    ↓
slides/*.md           # Individual slide content in Markdown
```

**Key architectural decisions:**

- **Separation of concerns**: Content (Markdown), styling (CSS), and behavior (JavaScript) are fully decoupled
- **Runtime parsing**: Slides are fetched and parsed client-side, enabling hot content updates without rebuilding
- **Zero build step**: No bundlers, transpilers, or compilation required
- **Portable deployment**: Can run on any static file server or Deno Deploy

### File Structure

```
/
├── main.ts                      # Deno HTTP server (entry point)
├── deno.json                    # Deno tasks and deploy config
├── presentation.html            # Minimal HTML shell (34 lines, 1.2KB)
├── theme.css                    # Base CSS styles (222 lines, 4.2KB)
├── assets/
│   ├── lib/
│   │   └── presentation.js      # All JavaScript logic (303 lines, 9.1KB)
│   └── themes/
│       ├── dark.css             # Dark theme (default)
│       ├── light.css            # Light theme
│       ├── cyberpunk.css        # Cyberpunk theme
│       ├── ocean.css            # Ocean theme
│       ├── forest.css           # Forest theme
│       └── sunset.css           # Sunset theme
├── slides/
│   ├── manifest.json            # Slide order (array of filenames)
│   ├── 01-title.md              # Title slide with theme switcher
│   ├── 02-outline.md
│   └── ...
├── CLAUDE.md                    # This file
├── README.md                    # User-facing documentation
├── REFACTORING_SUMMARY.md       # Refactoring documentation
├── THEME_FEATURE_SUMMARY.md     # Theme feature implementation notes
└── THEME_SWITCHER_GUIDE.md      # Theme user/developer guide
```

**Recent updates (2025-10-01):**
- **Cleanup**: Removed 4 unused files: `index-old.html`, `index.html.bak`, `create-index.sh`, `generate-index.ts`
- **Refactoring**: Extracted inline CSS from `presentation.html` to `theme.css` (single source of truth)
- **Refactoring**: Extracted inline JavaScript to external module `assets/lib/presentation.js`
- **Optimization**: Reduced `presentation.html` from 152 lines to 34 lines (78% reduction)
- **Architecture**: Better separation of concerns - HTML structure, CSS styles, JS behavior now fully decoupled
- **Feature**: Added theme switcher with 6 themes (dark, light, cyberpunk, ocean, forest, sunset)
- **UX**: Theme preference saved to localStorage for persistence

### Technology Stack

- **Runtime**: Deno (native TypeScript, Web Standards)
- **Server**: Deno's built-in HTTP server via `Deno.serve()`
- **Content Format**: Markdown with custom extensions (`{.fragment}` for progressive reveal)
- **Styling**: Modern CSS with:
  - CSS Custom Properties (theming)
  - `color-mix()` for dynamic color blending
  - Container queries
  - `backdrop-filter` for glass morphism effects
  - `clamp()` for fluid typography
- **JavaScript**: Vanilla ES6+ (no frameworks or dependencies)
  - Fetch API for loading slides
  - Custom Markdown parser (no external library)
  - Hash-based routing for deep linking
  - Event delegation for navigation

## Common Development Commands

### Running the Server

```bash
# Development mode (with file watching)
deno task dev

# Production mode (no watch)
deno task start
```

Server runs on `http://localhost:8000` by default.

### Deploying to Deno Deploy

```bash
# Via deployctl CLI
deno install -A --global jsr:@deno/deployctl
deployctl deploy

# Via GitHub integration
# 1. Push to GitHub
# 2. Connect repo at https://dash.deno.com/new
# 3. Select main.ts as entry point
```

### Regenerating Legacy Single-File HTML

```bash
deno run --allow-write generate-index.ts
```

This generates a standalone `index.html` with all CSS/JS inlined (useful for email distribution or offline use).

## Slide Authoring

### Markdown Syntax

Each slide is a `.md` file supporting:

**Headings:**
```markdown
# H1 (large title)
## H2 (section heading)
### H3 (subsection)
```

**Lists with progressive reveal:**
```markdown
- Item revealed immediately
- Another item {.fragment}
- This appears on next keypress {.fragment}
```

**Code blocks:**
````markdown
```
Your code here
Will have a "Copy" button auto-added
```
````

**Raw HTML:** Full HTML is supported for complex layouts, SVG diagrams, or custom styling:
```html
<div class="split">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

**Speaker notes:** Add at the end of any slide:
```markdown
<!-- NOTES: Your private notes here (shown when pressing 'S' key) -->
```

### Adding a New Slide

1. Create a new `.md` file in `/slides/` (e.g., `16-new-slide.md`)
2. Add the filename to `/slides/manifest.json` in the desired position:
   ```json
   [
     "01-title.md",
     "02-outline.md",
     "16-new-slide.md"
   ]
   ```
3. Refresh the browser - slides are loaded dynamically at runtime

### Slide Ordering

The `slides/manifest.json` file is the **single source of truth** for slide order. The array position determines the sequence.

## Custom Markdown Extensions

The custom parser in `assets/lib/presentation.js` handles:

- **Fragment markers**: `{.fragment}` at end of list items
- **Speaker notes**: `<!-- NOTES: ... -->` comments
- **HTML passthrough**: Lines starting with `<` are rendered as-is
- **Auto-linking**: `[text](url)` converted to `<a>` tags
- **Code blocks**: Triple backticks become `<pre><code>` with copy button

## Navigation System

### User Controls

- **Keyboard**: `→` `←` `Space` `Home` `End` `H` (help) `S` (speaker notes)
- **Mouse**: Click left/right thirds of screen
- **Touch**: Swipe left/right on mobile
- **Direct**: Click progress dots at bottom
- **Deep linking**: URL hash `#5` jumps to slide 5

### Fragment System

Elements with `.fragment` class are hidden initially and revealed progressively:

1. JavaScript collects all `.fragment` elements per slide on load
2. Arrow/Space keys reveal next fragment before advancing slide
3. Reverse navigation hides fragments in reverse order
4. Fragment state is tracked per-slide in `state.fragIdx[]`

## Theming and Styling

### Theme Switcher (New Feature - 2025-10-01)

The presentation now supports **6 switchable themes** available on the first slide:

**Available Themes:**
- 🌙 **Dark** (default) - Professional dark mode with indigo/pink accents
- ☀️ **Light** - Clean light mode with vibrant colors
- ⚡ **Cyberpunk** - Neon pink/cyan with dark background and glowing effects
- 🌊 **Ocean** - Deep blue with aqua accents
- 🌲 **Forest** - Natural greens with warm earth tones
- 🌅 **Sunset** - Warm oranges and purples

**How it works:**
- Theme buttons appear on the title slide (slide 1)
- Selected theme is saved to `localStorage` and persists across sessions
- Theme files located in `assets/themes/*.css`
- Each theme defines CSS custom properties (colors, shadows, etc.)
- Switching is instant with smooth transitions

**Creating a new theme:**
1. Create `assets/themes/mytheme.css`
2. Define all CSS custom properties (use `dark.css` as template)
3. Add theme to `themes` array in `presentation.js` (line 255)
4. Add button to `slides/01-title.md` theme switcher

### CSS Custom Properties

All themes use the same CSS variable structure:

**Colors:**
```css
--primary: #818cf8    /* Main brand color */
--secondary: #f472b6  /* Accent color */
--success: #34d399    /* Success states */
--warning: #fbbf24    /* Warning states */
--danger: #f87171     /* Error states */
--bg: #0a0e1a         /* Background */
--text: #ffffff       /* Primary text */
--text-dim: #cbd5e1   /* Secondary text */
--glass: color-mix(...)  /* Glassmorphism effect */
```

**Typography:**
```css
--font-ui: system-ui, ...      /* UI font stack */
--font-mono: ui-monospace, ... /* Code font stack */
```

**Animation:**
```css
--dur-fast: 200ms
--dur: 600ms
--easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Responsive Design

- **Fluid typography**: Uses `clamp()` for min/max/preferred sizing
  ```css
  font-size: clamp(1.05rem, 2.5vw, 1.3rem)
  ```
- **Container queries**: Layout adapts based on container width (not viewport)
- **Touch targets**: Minimum 48px for mobile accessibility
- **Reduced motion**: Respects `prefers-reduced-motion` user preference

## Server Architecture

### main.ts Request Handling

```typescript
Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const path = decodeURIComponent(url.pathname);

  // Root → presentation.html (or fallback to index.html)
  if (path === "/" || path === "/index.html") {
    try {
      return await serveFile(req, "./presentation.html");
    } catch { /* fallback to legacy */ }
  }

  // All other paths → static assets (theme.css, slides/*.md, etc.)
  const fsPath = "." + (path === "/" ? "/presentation.html" : path);
  return await serveFile(req, fsPath);
});
```

**Security note**: Path is normalized to prevent directory traversal attacks.

### Permissions

The server requires:
- `--allow-net`: HTTP server binding
- `--allow-read`: File system reads for static assets

## Testing Checklist

When making changes, verify:

**Core Functionality:**
- [ ] All slides render with correct styling
- [ ] Navigation works (keyboard, mouse, touch, progress dots)
- [ ] Deep linking (`#N` URLs) jumps to correct slide
- [ ] Fragments (`.fragment` items) reveal step-by-step

**Features:**
- [ ] Help overlay (H key) displays shortcuts
- [ ] Speaker notes (S key) show `<!-- NOTES: ... -->` content
- [ ] Copy buttons appear on code blocks
- [ ] Copy to clipboard works (requires HTTPS or localhost)

**Cross-Browser:**
- [ ] Chrome/Edge (primary target)
- [ ] Firefox
- [ ] Safari

**Responsive:**
- [ ] Desktop (1920px+)
- [ ] Tablet (768px-1024px)
- [ ] Mobile (320px-768px)

**Accessibility:**
- [ ] Screen reader announces slide changes
- [ ] Keyboard navigation complete (no mouse required)
- [ ] Contrast ratios meet WCAG AA
- [ ] Reduced motion respected

## Content Overview

The presentation teaches a 3-rule framework for AI agent design:

1. **Rule 1: No Cape, No Crime** - Full autonomy for low-stakes, documented scenarios
2. **Rule 2: Show Your Work** - Propose & confirm for medium-stakes decisions
3. **Rule 3: Escalate Like a Pro** - Immediate escalation for high-stakes situations

Includes:
- The "Intern Test" metaphor
- Real-world examples and anti-patterns
- Copy-pasteable prompt template
- Before/after metrics
- 3 actionable next steps

## Key Gotchas

1. **Copy buttons require HTTPS or localhost** - Clipboard API security restriction
2. **Manifest order matters** - `slides/manifest.json` array position determines sequence
3. **Fragment syntax is strict** - Must be `{.fragment}` exactly (no spaces inside braces)
4. **Speaker notes are HTML comments** - Must use `<!-- NOTES: ... -->` format
5. **Path normalization** - Server prevents directory traversal, so all paths are relative to project root

## Architecture Evolution

**Phase 1 (Original):** Single-file `index.html` with all HTML, CSS, and JavaScript inline (~50KB, 1000+ lines)

**Phase 2 (Markdown):** Modular system with slides as Markdown files, but still embedded CSS/JS in HTML

**Phase 3 (Current - 2025-10-01):** Fully separated concerns:
- `presentation.html` - Pure HTML structure (34 lines)
- `theme.css` - All styles in one place (222 lines)
- `assets/lib/presentation.js` - All behavior isolated (255 lines)
- `slides/*.md` - Content only

**Benefits of current architecture:**
- **Maintainability**: Edit styles/behavior without touching HTML
- **Caching**: Browser caches CSS/JS separately from HTML
- **Reusability**: Can reuse `presentation.js` engine for other slide decks
- **Debugging**: Clear separation makes troubleshooting easier
- **Testing**: Can unit test JavaScript module independently
- **Performance**: Parallel downloads of HTML, CSS, JS assets

## Performance Considerations

- **Cold start**: Deno Deploy optimized for fast cold starts
- **Asset loading**: Slides fetched in sequence (not parallel) to maintain order
- **Caching**: No explicit cache headers (relies on browser defaults)
- **Bundle size**: No bundling step; assets loaded on-demand
- **Client-side parsing**: Markdown parsing happens in browser (minimal overhead)
