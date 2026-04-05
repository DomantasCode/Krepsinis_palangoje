```markdown
# Design System Strategy: The Coastal Athlete

## 1. Overview & Creative North Star
The Creative North Star for this system is **"Kinetic Coastal."** 

We are moving away from the "youth sports template" of heavy strokes and frantic clipart. Instead, we are building a high-end editorial experience that captures the intersection of elite basketball training and the breezy, sun-drenched atmosphere of Palanga. The design must feel as fast as a fast-break but as premium as a seaside resort. 

To break the "template" look, we utilize **intentional asymmetry**. Layouts should feature overlapping elements—typography bleeding behind athlete cutouts, and containers that break the traditional grid. This creates a sense of forward motion and professional "soul" that standard layouts lack.

---

## 2. Colors: Tonal Depth & Solar Energy
The palette is a sophisticated mix of high-heat athletic tones and cooling coastal anchors.

*   **Primary (`#a13900`) & Secondary (`#b5161e`):** These are your "Heat" tokens. Use them for action and energy.
*   **Tertiary (`#006573`):** This is the "Coastal Anchor." It provides the premium nautical contrast to the orange/red heat.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate the "Beach" (Sand/White sections) from the "Court" (Orange/Red sections), use background shifts. For example, transition from `surface` to `surface-container-low`.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of physical materials. A `surface-container-lowest` card (Pure White) should sit atop a `surface-container` (Sand/Light Grey) background to create a soft, natural lift.
*   **The "Glass & Gradient" Rule:** Use `primary` to `primary-container` gradients for Hero CTAs to mimic the Palanga sunset. For floating navigation or overlays, use **Glassmorphism**: semi-transparent `surface` colors with a 20px backdrop-blur. This keeps the "sunny" vibe alive by letting background colors bleed through.

---

## 3. Typography: The Athletic Editorial
Our typography is the engine of the brand’s energy.

*   **Display Scale (Lexend):** This is your "Power" typeface. Use `display-lg` (3.5rem) for massive, impactful headlines. To achieve the premium feel, use tight letter-spacing (-2%) and occasional italics to imply speed.
*   **Headline & Title (Lexend / Plus Jakarta Sans):** Headlines remain bold and authoritative. Titles transition to Plus Jakarta Sans to provide a more approachable, modern "tech" feel for information hierarchy.
*   **Body & Labels (Plus Jakarta Sans):** The body scale is optimized for readability. Use `body-lg` for coaching philosophies and `label-md` (Lexend) for "Pro-Tips" or technical stats. 
*   **Hierarchy Strategy:** Large-scale typography should often act as a background element (e.g., a massive, low-opacity "PALANGA" behind a player photo) to add depth and editorial flair.

---

## 4. Elevation & Depth: Tonal Layering
Avoid "Legacy Web" shadows. We define space through light and physics.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-highest` element represents the most "active" or "proximate" content to the user.
*   **Ambient Shadows:** When a card needs to float, use a shadow with a 40px blur at 6% opacity, tinted with the `on-surface` color. This mimics natural sunlight on the sand rather than a digital drop shadow.
*   **The "Ghost Border" Fallback:** For buttons on vibrant backgrounds, use the `outline-variant` at 20% opacity. This creates a "shimmer" effect that defines the shape without clogging the visual field with hard lines.
*   **Nautical Textures:** Implement subtle noise textures on `surface-container` areas to mimic the feel of sand, adding a tactile, high-end quality to the digital space.

---

## 5. Components: Precision & Motion

*   **Buttons:**
    *   *Primary:* Solid `primary` with a subtle gradient to `primary-container`. High roundedness (`full`) to mimic the curve of a basketball.
    *   *Secondary:* `secondary-container` background with `on-secondary-container` text. No border.
*   **Cards & Lists:** **Strictly no divider lines.** Use vertical whitespace (32px or 48px) and subtle shifts between `surface-container-low` and `surface-container-high` to group content.
*   **Chips:** Use `tertiary-container` for coastal-themed filters (e.g., "Summer Camp," "Beach Drills"). These should feel like premium badges.
*   **Input Fields:** Use `surface-container-lowest` with a "Ghost Border." When focused, the border should transition to a 2px `primary` underline to maintain an athletic, "court-line" feel.
*   **Training Drills Component (Signature):** A custom "Drill Card" using Glassmorphism. The card background is a blurred `surface-variant`, allowing the vibrant orange of the basketball court imagery underneath to peak through.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** overlap typography and images. A player's head should break the top boundary of its container.
*   **Do** use `tertiary` (Azure/Teal) as a cooling accent for success states or nautical details.
*   **Do** utilize the `full` roundedness token for buttons to keep the UI friendly and youth-focused.

### Don’t:
*   **Don’t** use black (`#000000`). Use `on-surface` or `on-background` for text to keep the "sunny" atmosphere soft.
*   **Don’t** use a 12-column grid religiously. Allow elements to sit off-center to create a dynamic, "moving" layout.
*   **Don’t** use standard "Checkmarks." Use a custom basketball-icon or a nautical knot-inspired icon for a premium touch.
*   **Don’t** use hard-edged boxes. Even a "none" roundedness should be avoided unless it's a deliberate stylistic choice for a "Brutalist" section. Refer to the scale (Default: `0.5rem`).```