# Teaching Your AI the Art of Knowing Less

(... at least sometimes)

A practical guide to building AI that doesn't pretend to be smarter than it is

<div id="theme-switcher" style="margin-top: 2rem; display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; align-items: center;">
  <span style="font-size: 0.9rem; opacity: 0.7;">Theme:</span>
  <button class="theme-btn" data-theme="dark">🌙 Dark</button>
  <button class="theme-btn" data-theme="light">☀️ Light</button>
  <button class="theme-btn" data-theme="cyberpunk">⚡ Cyberpunk</button>
  <button class="theme-btn" data-theme="ocean">🌊 Ocean</button>
  <button class="theme-btn" data-theme="forest">🌲 Forest</button>
  <button class="theme-btn" data-theme="sunset">🌅 Sunset</button>
</div>

<style>
.theme-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid color-mix(in srgb, var(--primary) 40%, transparent);
  background: var(--glass);
  color: var(--text);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}
.theme-btn:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 30%, transparent);
}
.theme-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  font-weight: 600;
}
</style>

<!-- NOTES: Hook; set promise of framework + prompt + rules -->

