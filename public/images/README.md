# Images

The three files below are **placeholders**. Drop your real photos in with the
exact same filenames and the site picks them up — no code changes needed.

| File | Used in | Recommended size | What the shot should show |
|---|---|---|---|
| `hero.jpg` | Hero banner | **1600 × 1000** (16:10, landscape) | Bright room, mover in uniform kneeling by boxes with a clipboard. The left ~45% is covered by the cream card, so keep the subject on the **right side** of the frame. |
| `why-us.jpg` | "Why move with us" | **900 × 1000** (portrait, 9:10) | Mover taping/labelling a box, second person with a tablet in the background. |
| `quote.jpg` | Quote form | **900 × 1100** (portrait) | Two team members with a checklist in front of a shelf of boxes, warm light. |

Tips:

- Export as JPEG, quality 80, sRGB. Under ~400 KB each after export.
- Faces looking toward the centre of the page read better.
- If you want WebP/AVIF instead, rename the file and update the `src` in the
  matching component (`src/components/sections/`).
- Keep the aspect ratios above; the components crop with `object-cover`, so a
  very different ratio will cut heads off.
