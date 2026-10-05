# fluent-tailwinds

**Microsoft Fluent 2 design tokens cho Tailwind CSS v4** — màu, elevation, motion, shape và typography dưới dạng utility class.

Không cần React, không cần JS runtime. Chỉ một file CSS.

```css
@import "tailwindcss";
@import "fluent-tailwinds";
```

Xong. Bạn đã có `bg-brand`, `text-fg`, `elevation-16`, `rounded-control`, `text-subtitle2`, `focus-ring`, `motion-gentle`, `animate-slide-up`, `z-modal`…

---

## Cài đặt

```bash
npm install fluent-tailwinds
```

Yêu cầu Tailwind CSS `^4.0.0` (peer dependency).

## Tại sao dùng token thay vì viết màu thủ công

| Cách | Vấn đề |
| --- | --- |
| `bg-[#0f6cbd]` | Không đổi theme được, không có dark mode, lệch chuẩn Fluent sau này |
| `bg-blue-600` | Không phải màu Fluent — brand Fluent là `#0f6cbd` |
| **Token vai trò** | Đổi giá trị ở một chỗ, mọi component tự cập nhật; light/dark dùng chung một class |

```html
<!-- không cần biết màu nào, chỉ cần biết vai trò -->
<div class="bg-bg-card text-fg border border-stroke-default">...</div>
```

---

## Token

### Brand

| Class | Light | Dark |
| --- | --- | --- |
| `bg-brand` | `#0f6cbd` | `#4cb0ff` |
| `bg-brand-hover` | `#115ea3` | `#62abef` |
| `bg-brand-pressed` | `#0c3b5e` | `#87cefa` |
| `bg-brand-subtle` | `#eff6fc` | `#0a3a5a` |
| `bg-brand-selected` | `#e5f1fb` | `#003a5e` |
| `text-brand-foreground` | `#ffffff` | `#00325b` |

### Foreground / background / fill / stroke

| Nhóm | Token |
| --- | --- |
| Text | `text-fg`, `text-fg-secondary`, `text-fg-tertiary`, `text-fg-disabled`, `text-fg-inverse` |
| Surface | `bg-bg-canvas`, `bg-bg-layer`, `bg-bg-layer-alt`, `bg-bg-layer-alt2`, `bg-bg-card`, `bg-bg-subtle` |
| Input | `bg-fill-input`, `bg-fill-input-hover`, `bg-fill-input-disabled`, `bg-fill-subtle` |
| Viền | `border-stroke-default`, `border-stroke-secondary`, `border-stroke-tertiary`, `border-stroke-outline`, `border-stroke-divider` |

### Trạng thái

`text-critical` `text-success` `text-warning` `text-info` + bộ `-bg` / `-border` tương ứng.

### Elevation

Shadow ramp Fluent 2 (2 → 64) và utility ghép sẵn shadow + màu nền:

```html
<div class="elevation-16 rounded-card p-4">...</div>
```

Dùng thẳng `shadow-4` … `shadow-64` nếu bạn muốn tự chọn màu nền.

### Shape

`rounded-none` `rounded-xs` `rounded-sm` `rounded-md` `rounded-lg` `rounded-xl` `rounded-2xl` `rounded-circle`
+ semantic: `rounded-control` `rounded-surface` `rounded-card` `rounded-overlay`

Stroke width: `border-stroke` (1px), `border-stroke-thick` (2px), `border-stroke-thicker` (3px), `border-stroke-thickest` (4px).

### Motion

```html
<button class="motion-standard hover:bg-brand-hover">...</button>
```

| Utility | Transition |
| --- | --- |
| `motion-standard` | 200ms · `cubic-bezier(.33,0,.67,1)` |
| `motion-gentle` | 400ms · `cubic-bezier(.33,0,.67,1)` |
| `motion-emphasized` | 200ms · `cubic-bezier(.67,0,.17,1)` |

Duration rời: `duration-ultra-fast` `duration-faster` `duration-fast` `duration-normal` `duration-gentle` `duration-slow` `duration-slower` `duration-instant`
Easing rời: `ease-standard` `ease-decelerate` `ease-accelerate` `ease-emphasized` `ease-winui`

Animation: `animate-fade-in` `animate-fade-out` `animate-slide-up` `animate-slide-down` `animate-ripple` `animate-spin-slow`

Thêm `motion-safe` để tôn trọng `prefers-reduced-motion`:

```html
<div class="motion-safe animate-slide-up">...</div>
```

### Typography

Font: `font-sans` (Segoe UI Variable), `font-display`, `font-mono`

| Class | Size |
| --- | --- |
| `text-caption2` / `text-caption` | 11px / 12px |
| `text-body2` / `text-body` | 13px / 14px |
| `text-subtitle` / `text-subtitle2` | 16px / 20px |
| `text-title2` / `text-title` | 22px / 28px |
| `text-large` | 32px |
| `text-display` / `text-display-large` | 44px / 56px |

Semantic: `text-heading` (display font, weight 600), `text-body-strong`, `text-secondary`, `text-tertiary`.

### Z-index

`z-navigation` `z-flyout` `z-overlay` `z-modal` `z-popover` `z-toast` `z-tooltip`

### Surface & focus

```html
<div class="surface-card p-4">...</div>        <!-- nền + viền + bo góc + shadow -->
<div class="surface-control">...</div>         <!-- control input/button -->
<div class="surface-acrylic p-4">...</div>     <!-- acrylic + backdrop-blur -->
<button class="focus-ring">...</button>         <!-- focus ring Fluent, đạt WCAG 2.4.11/2.4.13 -->
```

---

## Light / dark theme

Mặc định là light. Chuyển theme bằng **một trong hai** cách:

```html
<html class="dark">
<html data-theme="dark">
```

```js
document.documentElement.classList.toggle("dark");
```

Không cần build lại: mọi utility trỏ tới `var(--color-*)`, nên đổi theme là đổi biến CSS.

Tôn trọng hệ điều hành:

```js
const mq = matchMedia("(prefers-color-scheme: dark)");
const apply = d => document.documentElement.classList.toggle("dark", d);
apply(mq.matches);
mq.addEventListener("change", e => apply(e.matches));
```

---

## Tuỳ biến token

Ghi đè sau khi import:

```css
@import "tailwindcss";
@import "fluent-tailwinds";

@theme {
  --color-brand: #c239b3;          /* thương hiệu riêng, vẫn giữ light/dark token còn lại */
  --radius-card: 12px;
}

:root {
  --z-fluent-modal: 1500;          /* chỉnh z-index layer */
}
```

Bạn chỉ cần khai báo những token muốn đổi; phần còn lại giữ nguyên giá trị Fluent.

---

## Về tính truy cập

Đã đo contrast thực tế trên trình duyệt (WCAG 2.1):

| Cặp màu | Light | Dark |
| --- | --- | --- |
| `fg` trên `bg-canvas` | 13.99:1 | 17.22:1 |
| `fg-secondary` trên canvas | 9.06:1 | 11.85:1 |
| `fg-tertiary` trên canvas | 5.58:1 | 7.68:1 |
| `brand-foreground` trên `brand` | 5.38:1 | 5.58:1 |
| `critical` / `success` / `warning` / `info` | 4.44–4.90:1 | 7.35–13.05:1 |

Tất cả đạt **WCAG AA** (≥4.5:1 cho text thường); `fg` đạt AAA.

Hai lưu ý:

- `stroke-default` trên card chỉ đạt **1.45:1**. Đây là viền trang trí và không cần đạt ngưỡng — nhưng nếu bạn dùng nó làm **ranh giới control duy nhất** (control boundary theo WCAG 1.4.11), hãy dùng `border-stroke-outline` hoặc thêm focus ring. `focus-ring` đạt 4.85:1 nên thoả yêu cầu 3:1 cho focus indicator.
- Dùng `motion-safe` cho mọi animation để tôn trọng `prefers-reduced-motion`.

---

## Demo

```bash
npm install
npm run demo:build    # build demo/demo-output.css
npm test              # build + verify toàn bộ utility có thực sự được sinh ra
```

Mở `demo/demo.html` trên trình duyệt. Demo có nút đổi light/dark và hiển thị đủ nhóm token.

---

## Vì sao có `scripts/verify.mjs`

Vì `@theme` trong Tailwind v4 **không phải token nào cũng sinh ra utility**, và điều này rất dễ sai:

- `--duration-gentle` **không** tạo ra `duration-gentle`. Namespace đúng là `--transition-duration-gentle`.
- `--z-modal` **không** tạo ra `z-modal` — Tailwind chỉ resolve z-index dạng số (`z-42`). Các layer Fluent được đóng gói bằng `@utility`.
- `--border-width-stroke` tạo ra class `border-stroke` (namespace `border-width` bị lược bỏ), **không** phải `border-width-stroke`.
- Token đặt trong `:root` thay vì `@theme` sẽ không sinh utility nào.

`verify.mjs` build demo rồi kiểm tra 70 utility + token dark có thực sự xuất hiện trong CSS output, nên một sai lệch namespace sẽ làm `npm test` đỏ.

---

## License

MIT