# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-10-05

### Added
- **Design Tokens**: Microsoft Fluent 2 design token mapping for Tailwind CSS v4.
- **Colors**: Brand, neutral foreground/background/fill/stroke, and status palettes with automatic light/dark mode support.
- **Elevation**: Shadow ramp (`shadow-2` to `shadow-64`) and composite elevation classes (`elevation-4` to `elevation-64`).
- **Shapes**: Fluent border radius scales (`rounded-xs` to `rounded-circle`, semantic `rounded-control`, `rounded-card`, `rounded-surface`) and stroke widths.
- **Motion**: Fluent transition durations (`duration-ultra-fast` to `duration-slower`), easings (`ease-standard`, `ease-winui`, etc.), presets (`motion-standard`, `motion-gentle`), and keyframe animations.
- **Typography**: Segoe UI Variable font stack and Fluent type scale (`text-caption2` up to `text-title-large`).
- **Z-Index**: Fluent z-index layer stack utilities (`z-flyout`, `z-modal`, etc.).
- **Accessibility**: High-contrast WCAG AA / AAA compliant token mappings and `focus-ring` utility.
- **Demo & Verification**: Standalone interactive demo and token verification script (`scripts/verify.mjs`).
