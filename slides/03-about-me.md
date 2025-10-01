# Hi, I'm Srdjan 👋

<div class="profile-container">
  <div class="profile-card">
    <div class="profile-header">
      <div class="profile-avatar">
        <div class="avatar-circle">
          <!-- Option 1: Use local image (recommended) -->
          <img src="assets/images/avatar.jpg" alt="Srdjan Strbanovic" class="avatar-image" />
        </div>
        <div class="avatar-glow"></div>
      </div>
      <div class="profile-title">
        <p class="profile-location">📍 Asbury Park, NJ</p>
      </div>
    </div>
    <div class="profile-links">
      <a href="https://srdjan.github.io/" target="_blank" rel="noopener" class="profile-link">
      <h4 class="section-title">🔗 Lets Connect ⊣˚∆˚⊢</h4>
      </a>
    </div>
  </div>
</div>

<style>
/* Profile Card Container */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.profile-card {
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--primary) 8%, var(--bg)),
    color-mix(in srgb, var(--secondary) 5%, var(--bg))
  );
  backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid color-mix(in srgb, var(--primary) 30%, transparent);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow:
    0 20px 60px color-mix(in srgb, black 40%, transparent),
    0 0 0 1px color-mix(in srgb, var(--primary) 20%, transparent) inset,
    0 0 40px color-mix(in srgb, var(--primary) 10%, transparent);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent,
    color-mix(in srgb, var(--primary) 10%, transparent),
    transparent
  );
  animation: shimmer 3s ease-in-out 0.5s 1;
}

/* Profile Header */
.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.profile-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  animation: floatIn 1s ease-out 0.3s backwards;
  box-shadow: 0 10px 30px color-mix(in srgb, var(--primary) 50%, transparent);
  overflow: hidden;
  border: 3px solid color-mix(in srgb, var(--primary) 60%, transparent);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-initials {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.avatar-glow {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    var(--primary),
    var(--secondary),
    var(--warning),
    var(--primary)
  );
  z-index: 1;
  animation: rotate 4s linear 1;
  opacity: 0;
  animation-fill-mode: forwards;
}

.profile-title {
  flex: 1;
  animation: slideInRight 0.8s ease-out 0.5s backwards;
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text);
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 10px color-mix(in srgb, var(--primary) 30%, transparent);
}

.profile-tagline {
  font-size: 1.3rem;
  color: var(--primary);
  margin: 0.5rem 0;
  font-weight: 600;
}

.profile-location {
  font-size: 1.1rem;
  color: var(--text-dim);
  margin: 0.5rem 0;
}

/* Divider */
.profile-divider {
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    color-mix(in srgb, var(--primary) 40%, transparent),
    color-mix(in srgb, var(--secondary) 40%, transparent),
    transparent
  );
  margin: 2rem 0;
  animation: expandWidth 0.8s ease-out 0.8s backwards;
}

/* Experience Section */
.profile-experience {
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out 1s backwards;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--secondary);
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.experience-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: color-mix(in srgb, var(--bg) 50%, transparent);
  border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.experience-item:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: 0 8px 20px color-mix(in srgb, var(--primary) 30%, transparent);
  background: color-mix(in srgb, var(--primary) 10%, transparent);
}

.company-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.company-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.company-details strong {
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
}

.company-name {
  color: var(--text-dim);
  font-size: 0.9rem;
}

/* Links Section */
.profile-links {
  animation: fadeInUp 0.8s ease-out 1.2s backwards;
}

.links-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.profile-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: color-mix(in srgb, var(--bg) 50%, transparent);
  border: 2px solid color-mix(in srgb, var(--primary) 30%, transparent);
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 10px color-mix(in srgb, black 20%, transparent);
}

.profile-link:hover {
  transform: translateY(-4px) scale(1.05);
  border-color: var(--primary);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: 0 8px 25px color-mix(in srgb, var(--primary) 40%, transparent);
  color: white;
}

.link-icon {
  width: 1.3rem;
  height: 1.3rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.link-text {
  font-size: 1rem;
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes expandWidth {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  to {
    left: 100%;
  }
}

@keyframes rotate {
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  50% {
    opacity: 0.3;
  }
  to {
    opacity: 0;
    transform: rotate(360deg);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .profile-name {
    font-size: 2rem;
  }

  .experience-grid {
    grid-template-columns: 1fr;
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .profile-container,
  .profile-title,
  .avatar-circle,
  .avatar-glow,
  .profile-divider,
  .profile-experience,
  .profile-links {
    animation: none !important;
  }

  .profile-card::before {
    animation: none !important;
  }
}
</style>

<!-- NOTES: Quick intro; credibility then move on -->
