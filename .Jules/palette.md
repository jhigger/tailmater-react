## 2024-05-24 - Accessibility Enhancements
**Learning:** Found an accessibility pattern for icon-only buttons (like Mode Toggle) where they need both `aria-label` and `title` attributes for screen readers and visual tooltips, respectively. Also, standard form elements like sliders and progress bars need explicit `id`/`htmlFor` and `aria-labelledby` connections when they're decoupled components.
**Action:** Always verify that decoupled components (labels + inputs) are properly linked via `id` and `htmlFor` or `aria-labelledby`, especially when using primitives like Base UI.
