# Scroll Smoothness Fix Plan

## Goal
Eliminate jumpy or non-smooth page scrolling while preserving Lenis smooth scroll and GSAP section animations.

## Investigation Summary
- `src/components/experienceSection/ExperienceMain.jsx`
  - Uses multiple `ScrollTrigger` instances with `toggleActions: "play reverse play reverse"`.
  - Reversing many reveals on rapid direction changes can feel jittery, especially when many triggers are active.
- `src/components/projectsSection/ProjectsMain.jsx`
  - Uses a pinned horizontal section (`pin: true`, `scrub: 1`) with dynamic end distance based on `track.scrollWidth`.
  - This is the highest-risk section for perceived "jump" when trigger measurements are stale or when entering/leaving the pin.
- `src/components/certificateSection/CertificateMain.jsx`
  - Uses reveal triggers only; low risk for major scroll jumps by itself.
- `src/index.css`
  - No active `scroll-snap-*` rules.
  - No active global `scroll-behavior: smooth` (commented out), so CSS is not currently forcing snap behavior.
- `src/App.jsx` Lenis + GSAP integration
  - Lenis is connected to GSAP ticker and `ScrollTrigger.update`.
  - No explicit global refresh strategy after lazy/Suspense content settles.
  - App uses one `Suspense` boundary for several lazy sections, which can change layout after initial paint.
- `src/components/navbar/NavbarMain.jsx`
  - Navigation uses `react-scroll` `smooth` behavior while Lenis also controls smooth scrolling, which can produce conflicting scroll interpolation.

## Root Causes To Address
1. `ProjectsMain` pinning is sensitive to stale measurements and can produce visible jumps at pin boundaries.
2. Missing coordinated `ScrollTrigger.refresh()` after lazy-loaded sections and media settle.
3. Dual smooth-scroll controllers (`react-scroll` smooth + Lenis smooth) can conflict.
4. High volume of reverse/replay triggers increases perceived jitter during quick directional scrolling.

## Implementation Steps
1. Stabilize Lenis and ScrollTrigger lifecycle in `src/App.jsx`.
   - Keep current Lenis integration, and add a post-mount refresh cycle:
     - Run `ScrollTrigger.refresh()` after initial render settles.
     - Add listeners for `load` and `resize` to refresh trigger measurements.
     - Trigger refresh after Suspense content resolves (via a lightweight state flag from lazy sections mount).

2. Remove smooth-scroll conflict in navbar links.
   - In `src/components/navbar/NavbarMain.jsx`, disable `react-scroll` smoothing (`smooth={false}`) and shorten duration usage.
   - Route section jumps through Lenis (`lenis.scrollTo(...)`) so only one scroll engine animates.
   - Keep offsets consistent with fixed navbar height.

3. Harden `ProjectsMain` pinned horizontal section.
   - In `src/components/projectsSection/ProjectsMain.jsx`:
     - Compute scroll distance with a safe clamp (`Math.max(track.scrollWidth - window.innerWidth, 0)`).
     - Use one dedicated timeline for pin + horizontal translation.
     - Add `invalidateOnRefresh: true` and force refresh after image load within this section.
     - Ensure cleanup kills all project-specific triggers/tweens on unmount.

4. Reduce reverse thrash for reveal animations.
   - In `ExperienceMain` and `CertificateMain`, switch non-critical reveal triggers from repeated reverse patterns to one-way play (`once: true`) where acceptable.
   - Keep scrub-based timeline animations intact.

5. Add instrumentation for easier future diagnosis.
   - Temporarily enable `markers` behind a dev flag for problematic triggers during debugging.
   - Add a small helper utility for registering/cleaning triggers consistently.

## Validation Checklist
- Desktop wheel scroll feels continuous through all sections.
- Entering/exiting Projects pin section has no abrupt jump.
- Scrolling up/down rapidly does not stutter from repeated reveal reversals.
- Navbar section links scroll smoothly using Lenis only.
- Mobile touch scroll remains stable (no over-acceleration spikes).
- No leaked triggers after route/app remount in development (`StrictMode`).

## Rollout Order
1. App-level refresh + navbar scroll-controller unification.
2. Projects pin hardening.
3. Reveal-trigger tuning.
4. QA pass on desktop and mobile.