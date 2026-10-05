/**
 * verify.mjs — smoke test that fluent-tailwinds actually produces utilities.
 * Fails (exit 1) if any expected utility class is missing from the build.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "demo", "demo-output.css");

if (!existsSync(out)) {
  console.error("✗ demo/demo-output.css chưa được build. Chạy: npm run demo:build");
  process.exit(1);
}

const css = readFileSync(out, "utf8");

const expected = [
  // brand & surfaces
  "bg-brand",
  "bg-brand-subtle",
  "text-brand-foreground",
  "bg-bg-canvas",
  "bg-bg-card",
  "text-fg",
  "text-fg-secondary",
  "text-fg-tertiary",
  // status
  "bg-critical",
  "bg-success",
  "bg-warning",
  "bg-info",
  // strokes
  "border-stroke-default",
  "bg-stroke-default",
  "border-stroke",
  "border-stroke-thick",
  // elevation
  "elevation-4",
  "elevation-8",
  "elevation-16",
  "elevation-28",
  "elevation-64",
  "shadow-4",
  "shadow-28",
  // opacity & shape
  "opacity-disabled",
  "rounded-control",
  "rounded-card",
  "rounded-surface",
  "rounded-circle",
  "rounded-none",
  "rounded-xs",
  "rounded-md",
  "rounded-xl",
  "rounded-2xl",
  // motion
  "motion-standard",
  "motion-gentle",
  "motion-emphasized",
  "motion-safe",
  "duration-gentle",
  "duration-normal",
  "duration-ultra-fast",
  "duration-instant",
  "ease-decelerate",
  "ease-winui",
  "ease-decelerate",
  "animate-fade-in",
  "animate-slide-up",
  "animate-ripple",
  "animate-spin-slow",
  // typography
  "text-caption",
  "text-caption2",
  "text-body",
  "text-subtitle2",
  "text-title",
  "text-display",
  "text-display-large",
  "text-heading",
  "text-body-strong",
  "text-secondary",
  "text-tertiary",
  // surfaces / focus
  "surface-control",
  "surface-card",
  "surface-acrylic",
  "focus-ring",
  "focus-ring-inset",
  // variants
  "hover\\:bg-brand-hover",
  "active\\:bg-brand-pressed",
  // z-index layers
  "z-modal",
  "z-flyout",
  "z-toast",
  "z-tooltip",
  "z-navigation",
];

const missing = expected.filter((cls) => !css.includes(`.${cls}`));

// Dark theme overrides must exist for the same variables as light.
const darkTokens = [
  "--color-brand",
  "--color-bg-canvas",
  "--color-fg",
  "--color-stroke-default",
  "--color-critical",
];
const darkBlock = css.slice(css.indexOf("html.dark"));
const missingDark = darkTokens.filter((t) => !darkBlock.includes(t));

const problems = [];
if (!css.includes(":is(html.dark, html[data-theme=\"dark\"], .dark, [data-theme=\"dark\"])")) {
  problems.push("selector dark theme chưa hỗ trợ scoped container (:is(.dark, [data-theme=\"dark\"]))");
}
if (missing.length) problems.push(`thiếu utility: ${missing.join(", ")}`);
if (missingDark.length) problems.push(`dark theme thiếu token: ${missingDark.join(", ")}`);

if (problems.length) {
  console.error("✗ VERIFY FAIL\n  - " + problems.join("\n  - "));
  process.exit(1);
}

console.log(
  `✓ VERIFY PASS — ${expected.length} utility + ${darkTokens.length} dark token đã được sinh ra (${Math.round(css.length / 1024)} KB CSS).`,
);