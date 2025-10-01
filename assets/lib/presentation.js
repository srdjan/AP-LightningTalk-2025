// Presentation Engine - Modular slide presentation system
const state = {
  slides: [],
  htmlSections: [],
  notes: [],
  current: 0,
  frags: [],
  fragIdx: [],
};
const deck = document.getElementById("deck");
const nav = document.getElementById("nav");
const help = document.getElementById("help");
const notes = document.getElementById("notes");
const notesBody = document.getElementById("notes-body");
const announcer = document.getElementById("announcer");
// Interaction thresholds
const CLICK_LEFT_RATIO = 0.3, CLICK_RIGHT_RATIO = 0.7, SWIPE_THRESHOLD = 50;

async function loadManifest() {
  const res = await fetch("slides/manifest.json");
  if (!res.ok) throw new Error("manifest load failed");
  return res.json();
}

function parseMarkdown(md) {
  // Extract NOTES
  let note = "";
  md = md.replace(/<!--\s*NOTES:\s*([\s\S]*?)-->/i, (m, body) => {
    note = body.trim();
    return "";
  });
  const lines = md.split(/\r?\n/);
  let out = "", inCode = false, listType = null; // 'ul' | 'ol'
  const flushList = () => {
    if (listType) {
      out += `</${listType}>`;
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (/^\s*$/.test(line)) {
      flushList();
      continue;
    }
    if (line.trim().startsWith("<")) {
      flushList();
      out += line + "\n";
      continue;
    }
    if (line.startsWith("```")) {
      if (!inCode) {
        flushList();
        out += `<div class="code-wrap"><pre><code>`;
        inCode = true;
      } else {
        out +=
          `</code></pre><button class="copy-btn" data-copy>Copy</button></div>`;
        inCode = false;
      }
      continue;
    }
    if (inCode) {
      out += line.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "\n";
      continue;
    }

    const h3 = line.match(/^###\s+(.*)/);
    if (h3) {
      flushList();
      out += `<h3>${h3[1]}</h3>`;
      continue;
    }
    const h2 = line.match(/^##\s+(.*)/);
    if (h2) {
      flushList();
      out += `<h2>${h2[1]}</h2>`;
      continue;
    }
    const h1 = line.match(/^#\s+(.*)/);
    if (h1) {
      flushList();
      out += `<h1>${h1[1]}</h1>`;
      continue;
    }

    const ol = line.match(/^\s*\d+\.\s+(.*)/);
    if (ol) {
      if (listType !== "ol") {
        flushList();
        out += "<ol>";
        listType = "ol";
      }
      let item = ol[1];
      const frag = /\s*\{\.fragment\}\s*$/.test(item);
      item = item.replace(/\s*\{\.fragment\}\s*$/, "");
      out += `<li${frag ? ' class="fragment"' : ""}>${item}</li>`;
      continue;
    }

    const ul = line.match(/^\s*[-\*]\s+(.*)/);
    if (ul) {
      if (listType !== "ul") {
        flushList();
        out += "<ul>";
        listType = "ul";
      }
      let item = ul[1];
      const frag = /\s*\{\.fragment\}\s*$/.test(item);
      item = item.replace(/\s*\{\.fragment\}\s*$/, "");
      out += `<li${frag ? ' class="fragment"' : ""}>${item}</li>`;
      continue;
    }

    flushList();
    // simple links [text](url)
    line = line.replace(
      /\[([^\]]+)\]\(([^\)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>',
    );
    out += `<p>${line}</p>`;
  }
  flushList();
  return { html: out, note };
}

async function loadSlides() {
  const files = await loadManifest();
  for (const f of files) {
    const res = await fetch(`slides/${f}`);
    const md = await res.text();
    const { html, note } = parseMarkdown(md);
    const sec = document.createElement("section");
    sec.innerHTML = html;
    deck.appendChild(sec);
    state.htmlSections.push(sec);
    state.notes.push(note || "");
  }
  if (state.htmlSections.length) {
    state.htmlSections[0].classList.add("active");
  }
  buildDots();
  collectFragments();
  enhanceCodeBlocks();
  const m = location.hash.match(/#(\d+)/);
  if (m) {
    goTo(parseInt(m[1], 10) - 1);
  } else {
    announce();
  }
}

function buildDots() {
  nav.innerHTML = "";
  state.htmlSections.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "dot" + (i === 0 ? " active" : "");
    b.ariaLabel = `Go to slide ${i + 1}`;
    b.onclick = () => goTo(i);
    nav.appendChild(b);
  });
}

function collectFragments() {
  state.frags = state.htmlSections.map((sec) =>
    Array.from(sec.querySelectorAll(".fragment"))
  );
  state.fragIdx = state.frags.map(() => 0);
}

function enhanceCodeBlocks() {
  // already added copy buttons while parsing; wire handler
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const pre = btn.previousElementSibling;
    const code = pre?.querySelector("code");
    if (code) {
      navigator.clipboard.writeText(code.textContent.trim()).then(() => {
        const t = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = t, 1200);
      });
    }
  });
}

function updateSlides() {
  state.htmlSections.forEach((sec, i) => {
    sec.classList.remove("active", "prev");
    if (i === state.current) sec.classList.add("active");
    else if (i < state.current) sec.classList.add("prev");
  });
  nav.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === state.current);
    d.setAttribute("aria-current", i === state.current ? "true" : "false");
  });
  // render fragments visibility (hide from a11y and interactions until revealed)
  state.htmlSections.forEach((sec, i) => {
    const fr = state.frags[i] || [];
    fr.forEach((el, j) => {
      const shown = j < state.fragIdx[i];
      el.style.opacity = shown ? "1" : "0.15";
      el.setAttribute("aria-hidden", shown ? "false" : "true");
      el.style.pointerEvents = shown ? "auto" : "none";
    });
  });
  announce();
}

function announce() {
  const sec = state.htmlSections[state.current];
  const h = sec?.querySelector("h1,h2");
  const title = h?.textContent || `Slide ${state.current + 1}`;
  announcer.textContent = `${title}, slide ${
    state.current + 1
  } of ${state.htmlSections.length}`;
  document.title = title + " — AI Agent Talk";
}

function next() {
  const fr = state.frags[state.current] || [];
  if (state.fragIdx[state.current] < fr.length) {
    state.fragIdx[state.current]++;
    return updateSlides();
  }
  if (state.current < state.htmlSections.length - 1) {
    state.current++;
    state.fragIdx[state.current] = 0;
    updateSlides();
    location.hash = "#" + (state.current + 1);
  }
}

function prev() {
  const fr = state.frags[state.current] || [];
  if (state.fragIdx[state.current] > 0) {
    state.fragIdx[state.current]--;
    return updateSlides();
  }
  if (state.current > 0) {
    state.current--;
    state.fragIdx[state.current] = 0;
    updateSlides();
    location.hash = "#" + (state.current + 1);
  }
}

function goTo(n) {
  n = Math.max(0, Math.min(n, state.htmlSections.length - 1));
  state.current = n;
  state.fragIdx[n] = 0;
  updateSlides();
  location.hash = "#" + (n + 1);
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  const k = e.key;
  if (k === "ArrowRight" || k === " ") {
    e.preventDefault();
    next();
  } else if (k === "ArrowLeft") {
    e.preventDefault();
    prev();
  } else if (k === "Home") {
    e.preventDefault();
    goTo(0);
  } else if (k === "End") {
    e.preventDefault();
    goTo(state.htmlSections.length - 1);
  } else if (k.toLowerCase() === "h") {
    e.preventDefault();
    help.open ? help.close() : help.showModal();
  } else if (k.toLowerCase() === "s") {
    e.preventDefault();
    showNotes();
  } else if (k === "Escape") {
    if (help.open) help.close();
    if (notes.open) notes.close();
  }
});

// Mouse navigation (click left/right thirds)
document.addEventListener("click", (e) => {
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (t.closest("nav,dialog,button,a")) return;
  const x = e.clientX, w = innerWidth;
  if (x > w * CLICK_RIGHT_RATIO) next();
  else if (x < w * CLICK_LEFT_RATIO) prev();
});

// Touch navigation
let startX = 0;
document.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
document.addEventListener("touchend", (e) => {
  const dx = startX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > SWIPE_THRESHOLD) (dx > 0 ? next : prev)();
});

// Hash change navigation
addEventListener("hashchange", () => {
  const m = location.hash.match(/#(\d+)/);
  if (m) {
    goTo(parseInt(m[1], 10) - 1);
  }
});

function showNotes() {
  const txt = state.notes[state.current] ||
    (state.htmlSections[state.current]?.querySelector("h1,h2")?.textContent ||
      "");
  notesBody.textContent = txt;
  notes.open ? notes.close() : notes.showModal();
}

// Theme switching functionality
const themes = ["dark", "light", "cyberpunk", "ocean", "forest", "sunset"];
let themeLink = null;

function initThemeSystem() {
  // Create theme link element
  themeLink = document.createElement("link");
  themeLink.rel = "stylesheet";
  themeLink.id = "theme-stylesheet";
  document.head.appendChild(themeLink);

  // Load saved theme or default to 'dark'
  const savedTheme = localStorage.getItem("presentation-theme") || "dark";
  loadTheme(savedTheme);

  // Setup theme button listeners (after slides load)
  setTimeout(() => {
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const theme = e.target.dataset.theme;
        if (theme) {
          loadTheme(theme);
          localStorage.setItem("presentation-theme", theme);
        }
      });
    });
    updateThemeButtons(savedTheme);
  }, 100);
}

function loadTheme(themeName) {
  if (!themes.includes(themeName)) themeName = "dark";
  themeLink.href = `assets/themes/${themeName}.css`;
  updateThemeButtons(themeName);
}

function updateThemeButtons(activeTheme) {
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    if (btn.dataset.theme === activeTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Initialize on load
initThemeSystem();
loadSlides();
