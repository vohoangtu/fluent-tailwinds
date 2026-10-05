# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-10-05

### Added
- **Common Controls Recipes (FT-01)**: Utility-first templates for Buttons (Primary, Outline, Subtle) with all 5 interaction states (Rest, Hover, Active, Disabled, Focus-Visible).
- **Form Controls & Badges**: Utility recipes for Input fields, Checkbox, Toggle/Switch (with peer styling), and Status Badges (Filled, Tint, Outline).
- **Surfaces & Overlays (FT-02)**: Interactive Elevation Cards, Acrylic Flyout/Popover with backdrop-filter blur, and accessible Modal Dialog with backdrop.
- **Interactive Showcase (FT-03)**: Enhanced `demo/demo.html` with component test matrix, accessible modal dialog, and side-by-side Scoped Dark Mode verification.
- **Opacity Disabled Token**: Added `--opacity-disabled: 0.38` for WCAG-compliant disabled controls.

## [0.1.0] - 2026-10-05

### Added
- **Design Tokens**: Microsoft Fluent 2 design token mapping for Tailwind CSS v4.
- **Colors**: Brand, neutral foreground/background/fill/stroke, and status palettes with automatic light/dark mode support.
- **Theming**: Full-document and scoped container dark theming via `:is(html.dark, html[data-theme="dark"], .dark, [data-theme="dark"])`.
- **Elevation**: Shadow ramp (`shadow-2` to `shadow-64`) and composite elevation classes (`elevation-4` to `elevation-64`).
- **Shapes**: Fluent border radius scales (`rounded-xs` to `rounded-circle`, semantic `rounded-control`, `rounded-card`, `rounded-surface`) and stroke widths.
- **Motion**: Fluent transition durations (`duration-ultra-fast` to `duration-slower`), easings (`ease-standard`, `ease-winui`, etc.), presets (`motion-standard`, `motion-gentle`), and keyframe animations.
- **Typography**: Segoe UI Variable font stack and Fluent type scale (`text-caption2` up to `text-title-large`).
- **Z-Index**: Fluent z-index layer stack utilities (`z-flyout`, `z-modal`, etc.).
- **Accessibility**: High-contrast WCAG AA / AAA compliant token mappings and `focus-ring` utility.
- **Demo & Verification**: Standalone interactive demo and token verification script (`scripts/verify.mjs`).
