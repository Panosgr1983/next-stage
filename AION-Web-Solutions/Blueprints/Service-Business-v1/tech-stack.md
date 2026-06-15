# Tech Stack — Service Business v1

## Core
- **Framework**: React 18 + TypeScript
- **Build**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **i18n**: i18next + react-i18next
- **Language**: EL (default) + EN — flag-only toggle

## Design System
| Token | Value |
|---|---|
| Primary | `#6ab04c` (green) |
| Dark bg | `#0f172a` (slate-900) |
| Light bg | `#ffffff` |
| Surface | `#f8fafc` / `#1e293b` |
| Glass | `backdrop-blur-xl` + `bg-white/10` |
| Border radius | `rounded-xl` (12px) cards, `rounded-full` pills |
| Typography | System font stack (Inter fallback) |

## Key Dependencies
| Package | Purpose |
|---|---|
| react + react-dom | UI framework |
| framer-motion | Page/section animations |
| i18next + react-i18next | Multi-language |
| react-intersection-observer | Scroll-triggered animations |
| lucide-react | Icon library |
| tailwindcss | Utility CSS |
| typescript | Type safety |

## Theme
- Light mode: default
- Dark mode: via `dark` class on `<html>`
- Toggle stored in `localStorage('darkMode')`
- Default: light (not system preference)

## Image Stack
| Image Type | Format | Quality | Max Size | Priority |
|---|---|---|---|---|
| Hero | WebP | 80 | 200KB | fetchpriority=high |
| Gallery | WebP | 80 | 80KB each | lazy |
| Logo | WebP | 80 | 30KB | eager |
| Logo (white) | WebP | 80 | 30KB | eager |

## Defaults
| Setting | Value |
|---|---|
| Language | Greek (EL) |
| Theme | Light |
| Fallback language | EL |
| i18n storage | localStorage('language') |
| Theme storage | localStorage('darkMode') |

## Performance Techniques
- WebP everywhere (quality 80)
- `<img width height>` on all images (CLS prevention)
- Hero image preloaded via `<link rel="preload">`
- Non-critical images: `loading="lazy"` + `decoding="async"`
- Framer Motion: `AnimatePresence` only for modals/menus
- Tailwind: production build purges unused classes automatically
- Vite: automatic code splitting + minification
