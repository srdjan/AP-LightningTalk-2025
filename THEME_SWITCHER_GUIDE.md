# Theme Switcher Feature Guide

## Overview

The presentation now includes a **dynamic theme switcher** allowing users to choose from 6 different visual themes. The selected theme is automatically saved and persists across sessions.

---

## Available Themes

| Theme | Icon | Description | Primary Color | Background |
|-------|------|-------------|---------------|------------|
| **Dark** | 🌙 | Professional dark mode with indigo/pink accents | `#818cf8` | `#0a0e1a` |
| **Light** | ☀️ | Clean light mode with vibrant colors | `#6366f1` | `#ffffff` |
| **Cyberpunk** | ⚡ | Neon pink/cyan with glowing effects | `#ff2a6d` | `#0d1b2a` |
| **Ocean** | 🌊 | Deep blue with aqua accents | `#06b6d4` | `#0c1e2e` |
| **Forest** | 🌲 | Natural greens with warm earth tones | `#10b981` | `#1a2f1a` |
| **Sunset** | 🌅 | Warm oranges and purples | `#f97316` | `#1a0f1a` |

---

## How to Use

### For Presenters

1. Open the presentation in your browser
2. On the **first slide** (title slide), you'll see theme buttons
3. Click any theme button to switch instantly
4. Your choice is saved automatically to `localStorage`
5. The theme will be remembered when you reload the page

### For Developers

**Location of theme buttons:** [slides/01-title.md:7-15](slides/01-title.md:7)

**Theme switching logic:** [assets/lib/presentation.js:254-302](assets/lib/presentation.js:254)

**Theme CSS files:** `assets/themes/*.css`

---

## Architecture

### File Structure

```
assets/
└── themes/
    ├── dark.css        # Default theme
    ├── light.css       # Light mode
    ├── cyberpunk.css   # Neon aesthetic
    ├── ocean.css       # Blue/aqua palette
    ├── forest.css      # Green/earth tones
    └── sunset.css      # Orange/purple gradients
```

### How It Works

1. **Initialization** (`initThemeSystem()`)
   - Creates a `<link>` element dynamically
   - Loads saved theme from `localStorage` (or defaults to 'dark')
   - Attaches click handlers to theme buttons

2. **Theme Loading** (`loadTheme(themeName)`)
   - Updates the `href` of the theme `<link>` element
   - Points to the appropriate CSS file in `assets/themes/`
   - Updates button active states

3. **Persistence**
   - Theme preference saved to `localStorage.setItem('presentation-theme', themeName)`
   - Automatically restored on next page load

4. **CSS Variables**
   - Each theme defines the same set of CSS custom properties
   - Changing the theme file instantly updates all colors/styles
   - No page reload required

---

## Creating a Custom Theme

### Step 1: Create Theme CSS File

Create a new file in `assets/themes/mytheme.css`:

```css
/* My Custom Theme - Description */
:root {
  --primary: #yourcolor;
  --secondary: #yourcolor;
  --success: #yourcolor;
  --warning: #yourcolor;
  --danger: #yourcolor;
  --bg: #yourcolor;
  --text: #yourcolor;
  --text-dim: #yourcolor;
  --glass: color-mix(in srgb, var(--bg) 70%, transparent);

  /* Typography */
  --font-ui: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;

  /* Layout and spacing */
  --radius: 1.5rem;
  --shadow-1: 0 8px 32px color-mix(in srgb, black 30%, transparent);
  --shadow-2: 0 12px 48px color-mix(in srgb, black 40%, transparent);

  /* Animation */
  --dur-fast: 200ms;
  --dur: 600ms;
  --easing: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optional: Theme-specific overrides */
h1, h2 {
  /* Add custom effects */
}
```

### Step 2: Register Theme in JavaScript

Edit [assets/lib/presentation.js:255](assets/lib/presentation.js:255):

```javascript
const themes = ['dark', 'light', 'cyberpunk', 'ocean', 'forest', 'sunset', 'mytheme'];
```

### Step 3: Add Button to UI

Edit [slides/01-title.md](slides/01-title.md) and add:

```html
<button class="theme-btn" data-theme="mytheme">🎨 My Theme</button>
```

### Step 4: Test

1. Run `deno task dev`
2. Open `http://localhost:8000`
3. Click your new theme button
4. Verify colors change correctly

---

## CSS Variable Reference

All themes must define these variables:

### Colors
- `--primary` - Main brand color (buttons, headings, accents)
- `--secondary` - Secondary accent color
- `--success` - Success states (green)
- `--warning` - Warning states (amber)
- `--danger` - Error/danger states (red)
- `--bg` - Background color
- `--text` - Primary text color
- `--text-dim` - Secondary/muted text color
- `--glass` - Glassmorphism background (usually with transparency)

### Typography
- `--font-ui` - UI font stack
- `--font-mono` - Monospace font stack for code

### Layout
- `--radius` - Border radius for rounded elements
- `--shadow-1` - Subtle shadow
- `--shadow-2` - More prominent shadow

### Animation
- `--dur-fast` - Fast animation duration (200ms)
- `--dur` - Normal animation duration (600ms)
- `--easing` - Cubic bezier easing function

---

## Design Guidelines

### Contrast Ratios

Ensure your theme meets **WCAG AA** standards:
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18pt+): minimum 3:1 contrast ratio

**Test your colors:** Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Dark vs Light Themes

**For dark themes:**
- Background should be very dark but not pure black (`#0a0e1a` not `#000000`)
- Use semi-transparent whites for text (`#ffffff` with opacity or muted colors)
- Add subtle glow effects to primary elements

**For light themes:**
- Background should be white or very light gray
- Use dark text with good contrast
- Reduce shadow intensity (lighter shadows)
- Override specific styles if needed (see `light.css` for example)

### Theme-Specific Effects

You can add custom CSS rules to enhance specific themes:

```css
/* In cyberpunk.css */
h1, h2 {
  text-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary);
}

.dot.active {
  box-shadow: 0 0 20px var(--primary), 0 0 40px var(--primary) !important;
}
```

---

## Browser Compatibility

**Supported:** All modern browsers (2022+)
- Chrome/Edge 94+
- Firefox 88+
- Safari 15.4+

**Required CSS features:**
- CSS Custom Properties (CSS Variables)
- `color-mix()` function
- `clamp()` function
- CSS Container Queries

**Fallback:** If `color-mix()` is not supported, themes will still work but with less dynamic blending.

---

## Performance Notes

- **Theme switching is instant** - No page reload required
- **Only one theme loaded at a time** - Previous theme CSS is replaced, not stacked
- **Themes are ~1KB each** - Minimal impact on load time
- **localStorage persistence** - Theme choice saved locally (no server requests)

---

## Troubleshooting

### Theme buttons don't appear
- Check that you're on **slide 1** (title slide)
- Verify `slides/01-title.md` contains the theme switcher HTML

### Theme doesn't switch
- Open browser console and check for JavaScript errors
- Verify theme files exist in `assets/themes/`
- Check that theme name matches in both JS array and CSS filename

### Colors don't change
- Ensure your theme CSS file defines all required CSS variables
- Check browser dev tools to see which theme CSS file is loaded
- Try hard refresh (`Ctrl+Shift+R` or `Cmd+Shift+R`)

### Theme doesn't persist
- Check if localStorage is enabled in your browser
- Private/Incognito mode may not persist localStorage
- Check browser console for localStorage errors

---

## Future Enhancements

Potential improvements:

1. **Theme preview** - Hover to see theme preview without switching
2. **Custom theme editor** - UI to create themes in-browser
3. **Theme sharing** - Export/import theme files
4. **Transition effects** - Smooth color transitions when switching
5. **Auto theme** - Respect system preference (`prefers-color-scheme`)
6. **More themes** - Community-contributed themes
7. **Theme per slide** - Different themes for different sections

---

## Contributing a Theme

Want to add a new theme to the default collection?

1. Create your theme CSS file
2. Test it thoroughly (check contrast, readability, all slides)
3. Add it to the theme switcher
4. Submit a pull request with:
   - Theme CSS file
   - Screenshot of the theme
   - Description of the theme's aesthetic

**Good theme names:**
- Descriptive: "Cyberpunk", "Ocean", "Forest"
- Not too specific: Avoid "My Company Theme"
- Universal appeal: Consider diverse audience preferences

---

## License

All included themes are part of the presentation codebase and follow the same license as the main project.

© 2025 Srdjan Strbanovic. All rights reserved.
