# Change Report

## Scope
Updated the homepage About section to include the personal image and improved alignment with existing content.

## Changes Made

1. Added image support in homepage file
- File: `app/page.tsx`
- Added `next/image` import to render optimized local image assets.

2. Added `amaljith.png` to About section
- File: `app/page.tsx`
- Inserted image block using `/images/amaljith.png`.
- Added meaningful alt text: "Portrait of Amaljith".
- Configured responsive sizing via `sizes`.
- Used `object-cover object-top` to keep framing clean.

3. Improved About section alignment
- File: `app/page.tsx`
- Kept two-column structure (`md:grid-cols-[1.3fr_1fr]`).
- Converted right side into a vertical stack:
  - Top: image card
  - Bottom: Core Focus card
- Preserved spacing and card styling to match existing UI.

## Result
- About section now includes the portrait image.
- Image is visually aligned with text and cards.
- Layout remains responsive and consistent with site design.
