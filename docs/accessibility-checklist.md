# Accessibility Checklist (Advanced)

This checklist is designed for release gates and continuous quality control.

## 1. Focus and Keyboard Flow

- [ ] A visible skip link is present and moves focus to main content.
- [ ] Focus order follows visual/logical order from top to bottom.
- [ ] All interactive controls are reachable with `Tab` and actionable with keyboard only.
- [ ] No keyboard trap is present in nav, filters, theme switch, or language switch.
- [ ] Focus indicators remain clearly visible in light and dark themes.

## 2. Landmarks and Structure

- [ ] The page exposes one main landmark (`main`) and one banner landmark (`header`).
- [ ] Navigation landmarks have explicit labels (`aria-label`).
- [ ] Each major section is identifiable with `aria-labelledby` and a heading ID.
- [ ] Headings follow a coherent hierarchy without skipped levels.

## 3. ARIA and Semantics

- [ ] ARIA is used only when native semantics are insufficient.
- [ ] Locale switch sets `aria-current="page"` on active language.
- [ ] Theme toggle exposes an understandable `aria-label` for the next action.
- [ ] Button controls explicitly define `type="button"` when not submitting forms.

## 4. Contrast and Visual Accessibility (WCAG)

- [ ] Normal text contrast meets WCAG AA (>= 4.5:1).
- [ ] Large text contrast meets WCAG AA (>= 3:1).
- [ ] Interactive states (hover/focus/active) preserve readable contrast.
- [ ] Accent chips and badges remain readable in both light/dark themes.

## 5. Motion and Cognitive Load

- [ ] Non-essential motion is reduced when `prefers-reduced-motion` is enabled.
- [ ] Animations do not block interaction or hide key information timing.
- [ ] Content remains understandable with animations fully disabled.

## 6. Forms and Links

- [ ] External links opening in a new tab include safe `rel` values.
- [ ] Contact actions have explicit labels and meaningful text.
- [ ] Download actions are clearly identified as file downloads.

## 7. Automated Gates

- [ ] `npm run test:ui` passes locally.
- [ ] Axe checks report no critical or serious issues.
- [ ] `npm run quality:ci` passes before merge.
- [ ] CI workflow uploads Playwright report artifact for traceability.

## Quick Commands

```bash
npm run build
npm run test:ui
npm run quality:ci
```
