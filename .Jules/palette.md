## 2024-04-11 - Label Association for Decoupled Primitives
**Learning:** Decoupled `@base-ui/react` primitives (like Sliders and Progress bars) require explicit label association. The standard `htmlFor` on a label doesn't automatically map if the target component is not a standard `<input>`.
**Action:** Always explicitly link these components to their descriptive labels using `id` on the label and `aria-labelledby` on the primitive to guarantee correct screen-reader announcements.
