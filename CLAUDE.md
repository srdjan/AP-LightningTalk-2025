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
- Blog: https://blogo.timek.deno.net

## Repository Overview

This is a single-file HTML presentation repository for a lightning talk titled **"Teaching Your AI Agent the Art of Knowing Nothing (Sometimes)"** by Srdjan Strbanovic. The presentation is a fully self-contained HTML file with embedded CSS and JavaScript, designed to run in any modern browser without external dependencies.

**Talk Abstract**: A practical framework for building AI agents that know when to admit uncertainty, escalate appropriately, and avoid the pitfalls of overconfidence. Uses the "Intern Test" metaphor to teach responsible AI agent design with clear decision boundaries and escalation paths.

## Project Structure

```
/
├── main.ts         # Deno server entry point
├── deno.json       # Deno configuration
├── index.html      # Complete standalone presentation
├── CLAUDE.md       # This file
└── README.md       # Project documentation
```

## Technology Stack

- **Pure HTML5**: Semantic markup with accessibility features (ARIA labels, screen reader support)
- **Modern CSS**:
  - CSS custom properties (CSS variables) for theming
  - CSS animations and transitions
  - View Transitions API support
  - Container queries for responsive layout
  - Gradient text effects using `background-clip`
- **Vanilla JavaScript**: No frameworks or external dependencies
  - ES6+ features (arrow functions, const/let, template literals)
  - Event delegation and custom keyboard/touch navigation
  - Deep-linking with hash-based routing
  - Clipboard API integration
  - LocalStorage for speaker notes persistence

## Key Architectural Patterns

### Self-Contained Design
The entire presentation exists in a single HTML file with no external dependencies. All styles are in `<style>` tags, all scripts in `<script>` tags, and all content is inline. This makes the presentation highly portable and eliminates network dependencies.

### Slide Navigation System
- **Slide State Management**: Uses a simple index-based state machine (`currentSlide`)
- **CSS-Based Transitions**: Slides use CSS classes (`active`, `prev`) for positioning and opacity transitions
- **Multiple Navigation Methods**:
  - Keyboard: Arrow keys, Space, Home, End, H (help), S (speaker notes)
  - Touch: Swipe gestures for mobile
  - Mouse: Click left/right thirds of screen
  - Direct: Click progress dots to jump to specific slides

### Fragment Revealing System
Implements a progressive disclosure pattern where list items and content boxes can be revealed step-by-step within a slide:
- `fragmentsBySlide[]`: Arrays of fragment elements per slide
- `fragmentIndexBySlide[]`: Current reveal index per slide
- Auto-detects content that should be fragmented based on slide titles

### View Transitions API Integration
Uses the experimental View Transitions API when available for smoother slide transitions with a fallback to immediate updates in unsupported browsers.

### Speaker Notes Architecture
- Inline speaker notes stored in JavaScript object
- Toggle overlay with 'S' key
- Shows current slide number, title, and contextual notes
- Useful for presenting or rehearsing

## Quick Start

### Using Deno (Recommended)
```bash
deno task dev
# Visit: http://localhost:8000
```

### Direct Browser Access
```bash
open index.html
```

### Alternative: Python Server
```bash
python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Navigation Controls**:
- **Next slide**: → (right arrow), Space, or click right side of screen
- **Previous slide**: ← (left arrow) or click left side of screen
- **Jump to slide**: Click progress dots at bottom
- **Help**: Press `H`
- **Speaker notes**: Press `S`
- **First/Last slide**: Home/End keys
- **Mobile**: Swipe left/right

## Common Development Tasks

### Editing Slides

**Slide Structure**: Each slide is a `<div class="slide">` containing:
- A heading (`<h1>`, `<h2>`, or `<h3>`)
- Content (paragraphs, SVG diagrams, code blocks, examples)
- Optional fragments (elements with `.fragment` class for progressive reveal)

**To add a new slide**:
1. Add a new `<div class="slide">` before the closing `</div>` of `.presentation`
2. Include heading and content
3. Add speaker notes in the `buildNotes()` function
4. Progress dots auto-generate from slide count

**To modify speaker notes**: Edit the `buildNotes()` function inside the final `<script>` tag:
```javascript
setNote('Slide Title Substring', 'Your note text here.');
```

**Available slide content components**:
- `.code-block` - Code samples with dark background
- `.example` - Real-world scenario callouts (pink border)
- `.box` - Content containers (use with `.success`, `.warning`, `.danger` modifiers)
- `.split-content` - Two-column responsive grid
- `.rules-container` - Grid layout for rule cards
- SVG graphics - Inline diagrams (no external files)

### Theming

**CSS Custom Properties** (defined in `:root`):
- `--primary`: #6366f1 (indigo) - Main brand color
- `--secondary`: #ec4899 (pink) - Accent color
- `--success`: #10b981 (green) - Positive states
- `--warning`: #f59e0b (amber) - Caution states
- `--danger`: #ef4444 (red) - Error/alert states
- `--bg`: #0f172a (dark slate) - Background
- `--text`: #f1f5f9 (light slate) - Primary text
- `--text-dim`: #94a3b8 (muted slate) - Secondary text

**Animation Keyframes**:
- `fadeInUp` - Content appearing from below (800ms)
- `slideInRight` - Elements sliding from right (800ms)
- `slideInLeft` - Elements sliding from left (600ms)
- `bounce` - Continuous vertical bounce (2s loop)
- `pulse` - Opacity pulsing (2s loop)

## Presentation Content Overview

The talk covers a framework for building responsible AI agents using three core rules:

1. **Rule 1: No Cape, No Crime** - Full autonomy for low-stakes, documented scenarios
2. **Rule 2: Show Your Work** - Propose & confirm for medium-stakes decisions
3. **Rule 3: Escalate Like a Pro** - Immediate escalation for high-stakes situations

The presentation includes:
- The "Intern Test" metaphor
- Real-world examples and anti-patterns
- A copy-pasteable prompt template
- Before/after metrics
- Actionable next steps

## Technical Constraints & Features

### Core Principles
- **Zero Build Process**: Single HTML file, no compilation or bundling required
- **Zero Dependencies**: No npm packages, no CDN links, fully offline-capable
- **Maximum Portability**: Can be emailed, shared via USB, or hosted anywhere

### Browser Support
- **Minimum**: Modern browsers from 2022+ (Chrome/Edge/Firefox/Safari)
- **View Transitions API**: Used when available, gracefully degrades
- **Clipboard API**: Copy buttons require HTTPS or localhost for security reasons

### Built-in Features
- **Deep Linking**: Share specific slides with `#slide-N` URLs (e.g., `#slide-5`)
- **Keyboard Shortcuts**: Full keyboard navigation (arrows, space, H, S, Home, End)
- **Touch Gestures**: Swipe support for mobile/tablet devices
- **Speaker Notes**: Toggle with S key, hidden from audience view
- **Help Overlay**: Press H for keyboard shortcut reference
- **Accessibility**: ARIA labels, semantic HTML, screen reader support, reduced motion support
- **Responsive Design**: Container queries and fluid typography adapt to screen size

## Extension Patterns

### Progressive Reveal (Fragments)
Add step-by-step reveals within a slide by adding the `.fragment` class:
```html
<div class="list-item fragment">Step 1: First point</div>
<div class="list-item fragment">Step 2: Second point</div>
```
Use arrow/space keys to reveal each fragment before advancing to next slide.

### Custom Interactive Elements
Build on existing patterns:
- **Diagrams**: Use inline SVG (no external files) with CSS custom properties for colors
- **Code Samples**: `.code-block` with monospace font and syntax-colored text
- **Callouts**: `.box` containers with state modifiers (`.success`, `.warning`, `.danger`)
- **Two-Column**: `.split-content` grid (auto-collapses on mobile via container queries)
- **Copy-to-Clipboard**: Add `data-copy` to button and `data-copy-source` to content

### Responsive Typography
Uses modern CSS techniques:
- `clamp()` for fluid sizing: `font-size: clamp(1rem, 1.3vw + .6rem, 1.5rem)`
- Container queries for layout adaptation (not viewport-based)
- Touch-friendly tap targets (48px minimum)
- Flexible SVG with `viewBox` and `max-width`

## Testing & Quality Assurance

### Pre-Delivery Checklist
When modifying the presentation, verify:

**Navigation & Interaction**:
- [ ] Keyboard navigation (arrows, space, Home, End)
- [ ] Mouse click navigation (left/right screen thirds)
- [ ] Touch gestures on mobile/tablet (swipe left/right)
- [ ] Progress dots (click to jump to slides)
- [ ] Deep-linking with `#slide-N` URLs

**Overlays & Features**:
- [ ] Help overlay (H key) opens and closes correctly
- [ ] Speaker notes (S key) toggle with proper content
- [ ] Copy-to-clipboard buttons function (requires HTTPS or localhost)
- [ ] Fragment progressive reveals work as expected

**Cross-Browser & Accessibility**:
- [ ] Test in Chrome, Firefox, Safari (and Edge if possible)
- [ ] Verify with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Check reduced motion preference honors user settings
- [ ] Validate contrast ratios meet WCAG AA standards
- [ ] Ensure all interactive elements are keyboard accessible

**Responsive Design**:
- [ ] Test on desktop (1920px+)
- [ ] Test on tablet (768px-1024px)
- [ ] Test on mobile (320px-768px)
- [ ] Verify text remains readable at all sizes
- [ ] Check touch targets are minimum 48px

### Common Issues & Solutions

**Issue**: Copy buttons don't work
- **Solution**: Serve via HTTPS or localhost (Clipboard API restriction)

**Issue**: View transitions feel jarring
- **Solution**: User may have `prefers-reduced-motion` enabled (this is correct behavior)

**Issue**: SVG icons not visible
- **Solution**: Check SVG `fill` attributes use CSS custom properties (`var(--primary)`)

**Issue**: Fragments reveal all at once
- **Solution**: Ensure `.fragment` class is present and `initFragments()` detects the slide type
