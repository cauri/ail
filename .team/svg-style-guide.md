# SVG Production Style Guide

This guide ensures all visual aids match the ACE site's design system. Every SVG must feel like a native part of the site, not an inserted corporate graphic.

## Typography

- **Headings/labels**: `'DM Sans', sans-serif` — weight 400 (normal) for titles, 500 for emphasis, 700 for bold
- **Body text/annotations**: `'Inter', sans-serif` — weight 400 (normal), 500 for emphasis, 600 for strong
- **Title size**: 18-20px
- **Section labels**: 13-14px, font-weight 500
- **Body text**: 11-12px
- **Small annotations**: 9-10px
- **Heading letter-spacing**: -0.03em (tighter tracking, matching site h1 style)

## Color Palette

### Core
| Role | Hex | Usage |
|------|-----|-------|
| Primary text | `#151D1A` | All primary text, dark fills |
| Secondary text | `#6B7280` | Annotations, captions, secondary labels |
| Light text | `#9CA3AF` | Tertiary labels, deemphasized content |
| Background | `#FFFFFF` | SVG background |
| Subtle fill | `#F9FAFB` | Container backgrounds, section fills |
| Border | `#E5E7EB` | Container borders, divider lines |
| Accent | `#D912AE` | Emphasis, highlights, callout borders |
| Accent hover | `#FC55DE` | Secondary accent (sparingly) |
| Lavender | `#EDE8F5` | Soft highlight backgrounds |
| Light blue | `#EDF2FE` | Soft highlight backgrounds |

### Zone Colors
| Zone | Border/accent | Light fill | Text |
|------|--------------|------------|------|
| Zone 1 | `#60A5FA` (blue-400) | `#EFF6FF` (blue-50) | `#1E40AF` (blue-800) |
| Zone 2 | `#34D399` (emerald-400) | `#ECFDF5` (emerald-50) | `#065F46` (emerald-800) |
| Zone 3 | `#FBBF24` (amber-400) | `#FFFBEB` (amber-50) | `#92400E` (amber-800) |
| Zone 4 | `#A78BFA` (purple-400) | `#F5F3FF` (purple-50) | `#5B21B6` (purple-800) |

### Competency Stages
| Stage | Border/accent | Light fill | Text |
|-------|--------------|------------|------|
| Exemplary | `#34D399` (emerald) | `#ECFDF5` | `#065F46` |
| Established | `#60A5FA` (blue) | `#EFF6FF` | `#1E40AF` |
| Developing | `#FBBF24` (amber) | `#FFFBEB` | `#92400E` |
| Emerging | `#FB923C` (orange-400) | `#FFF7ED` (orange-50) | `#9A3412` (orange-800) |
| Not Yet | `#9CA3AF` (gray-400) | `#F9FAFB` (gray-50) | `#6B7280` (gray-500) |

### Semantic Colors (use sparingly)
| Role | Hex | Usage |
|------|-----|-------|
| Success/yes | `#34D399` | Positive outcomes, passing criteria |
| Warning | `#FBBF24` | Caution, ambiguity zones |
| Error/no | `#F87171` (red-400) | Failing criteria, negative paths |

## Shape Language

- **Containers**: `rx="8"` rounded corners, 1px `#E5E7EB` border, `#F9FAFB` or white fill
- **Small elements** (badges, pills): `rx="4"` or `rx="12"` (full round for pills)
- **Decision diamonds**: 45-degree rotated squares with 1.5px border
- **Arrows**: 1.5px stroke, `#6B7280` for connectors, zone color for zone-specific flows
- **Arrow markers**: small (8x6), filled with `#6B7280`
- **Emphasis borders**: 2px left border in accent color (matching site's `.prose blockquote` style)
- **Section dividers**: 1px `#E5E7EB` horizontal lines

## Layout Principles

- **Generous whitespace**: minimum 24px padding inside containers, 16px gaps between elements
- **Alignment**: strong left-alignment for text, center-alignment only for titles and single-line labels
- **Information density**: prefer well-spaced layouts over cramming; split into panels if needed
- **Maximum width**: 900px viewBox width (fits the site's max-w-7xl content area)
- **Responsive viewBox**: always use `viewBox` attribute, never fixed width/height attributes
- **Visual hierarchy**: size > weight > color > position (in order of emphasis strength)

## SVG Template

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 [width] [height]"
     font-family="'Inter', sans-serif">
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#6B7280"/>
    </marker>
    <!-- Define reusable styles as needed -->
  </defs>

  <!-- Background -->
  <rect width="[width]" height="[height]" fill="#fff" rx="8"/>

  <!-- Title (DM Sans) -->
  <text x="[x]" y="36" font-family="'DM Sans', sans-serif" font-size="20"
        font-weight="400" fill="#151D1A" letter-spacing="-0.03em">Title</text>
  <text x="[x]" y="54" font-size="12" fill="#6B7280">Subtitle or context line</text>

  <!-- Content goes here -->

</svg>
```

## Accessibility Requirements

- Text labels alongside ALL color encodings (never color-only meaning)
- Minimum 4.5:1 contrast ratio for all text
- Shape differentiation (not just color) for categorical distinctions
- Pattern fills available as secondary encoding for zone/stage colors
- All text as `<text>` elements (not embedded in paths), readable by screen readers
- Descriptive `<title>` and `<desc>` elements in each SVG

## Anti-Patterns (do NOT do these)

- Heavy colored fills that dominate the visual (use light fills with colored borders instead)
- Drop shadows, gradients, or 3D effects
- Helvetica/Arial (use DM Sans + Inter)
- Pill-shaped stage badges with white-on-color text (too heavy; use border + light fill instead)
- Dense text blocks inside small boxes
- Generic corporate clip art or icons
- Numbered zone labels that imply rank ("Zone 1" is a path position, not a level)

## File Naming

- Lowercase, hyphenated: `diagnosis-intervention-cycle.svg`
- Place in `public/images/`
- Reference from content as `![VA-X: Title](/images/filename.svg)`
