---
name: Studio de Pilates Tatiane Lasneaux
description: A Google Ads landing page built from Brasília's own modernist architecture — concrete arches, axial calm, and the studio's existing purple/lime brand.
colors:
  purple-900: "#241433"
  purple-800: "#341B4A"
  purple-700: "#4A2968"
  purple-600: "#6E3C97"
  purple-500: "#9955BB"
  purple-400: "#AD72C9"
  purple-300: "#C17ECD"
  gold-500: "#B0D575"
  gold-400: "#C6E394"
  concrete-050: "#FBF8F3"
  concrete-100: "#F4EEE4"
  concrete-200: "#E8DFD0"
  gray-900: "#1F162B"
  gray-700: "#4C4360"
  gray-500: "#6F6484"
  wa-green: "#0C7A42"
typography:
  display:
    fontFamily: "Syne, Arial Black, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  accent-serif:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  pill: "999px"
  arch-lg: "50% 50% 0 0 / 46% 46% 0 0"
  arch-md: "40% 40% 0 0 / 34% 34% 0 0"
spacing:
  section-y: "96px"
  section-x: "24px"
components:
  button-primary:
    backgroundColor: "{colors.wa-green}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "15px 30px"
  button-primary-hover:
    backgroundColor: "#0A6B3A"
  button-gold:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.purple-900}"
    rounded: "{rounded.pill}"
    padding: "19px 38px"
---

# Design System: Studio de Pilates Tatiane Lasneaux

## Overview

**Creative North Star: "The Lago Sul Colonnade"**

The site is built from Brasília's own modernist architectural language — Niemeyer's concrete curves, monumental color planes, and axial calm — translated into the studio's existing purple-and-lime brand rather than the civic red/white/blue of the real buildings. Every photo sits inside a poured-concrete arch, section seams are marked by a repeating scalloped colonnade silhouette, and one dominant plane of brand purple carries each key moment instead of a scattered accent. The result reads as "this is a serious, local, nearly-20-year-old institution that belongs to this specific city," not a generic wellness-app landing page.

This is a Persuade-mode surface for Google Ads traffic: every section earns its place by moving the visitor toward a WhatsApp click, so the civic-monumental language is kept warm (real studio photography, a hand-set ink annotation for tenure facts and testimonials) rather than cold or corporate.

**Confirmed visual rejections:** no pastel-gradient wellness-SaaS hero with a stock photo and a rounded pill-card trio; no sterile blue-cross medical-portal look; no kicker/eyebrow labels above headings; no same-size icon-in-a-circle feature cards; no hero-metric stat tiles.

**Key Characteristics:**
- Concrete-arch photo frames everywhere a photo appears (hero, founder portrait, each service row)
- A scalloped "colonnade" divider marks every light/dark section seam
- One saturated purple plane per key section, never a scattered accent
- Civic-poster display type (Syne, uppercase) paired with Inter body text and a Playfair-italic warm accent for tenure facts and quotes
- WhatsApp green is treated as a fixed functional color, never restyled, because it is the conversion mechanism

## Colors

The palette is the studio's own pre-existing brand (purple + lime), reassigned to carry the weight of architectural color planes instead of generic accent dots.

### Primary
- **Lago Sul Purple** (`#9955BB`, family `#241433`–`#C17ECD`): the dominant saturated plane — hero arch outline, proof-plaque band, dark section backgrounds, primary link/accent color. Carries 30–60% of a section when it appears, never a sliver.

### Secondary
- **Cerrado Lime** (`#B0D575`, with `#C6E394` for dark-ground use): the precise accent — the "gold" CTA button on dark sections, active/hover marks, the hand-set ink-note underline stroke.

### Neutral
- **Warm Concrete** (`#FBF8F3` / `#F4EEE4` / `#E8DFD0`): the page ground, standing in for raw Brasília concrete. Deliberately warm, not gray — a material choice tied to the direction, not a default "AI cream" pick.
- **Ink** (`#1F162B` body text, `#4C4360` secondary, `#6F6484` tertiary — tuned to ≥4.5:1 on `concrete-050`): all reading text.

### Named Rules
**The One Plane Rule.** Purple is never a scattered accent; each section that uses it commits a whole plane (an arch, a band, a full dark section) to it.
**The Functional Green Rule.** WhatsApp green (`#0C7A42`, deepened from the brand's `#25D366` for 4.5:1 contrast with white text) is never themed, gradiented, or reinterpreted — it is the conversion mechanism, not a design opportunity.

## Typography

**Display Font:** Syne (800/700), uppercase, tight tracking
**Body Font:** Inter (300–700)
**Accent Font:** Playfair Display italic (600), used only for the hand-set "ink note" annotations and testimonial quotes

**Character:** Syne's geometric, slightly eccentric caps read as civic-poster lettering — a 1960s-70s Brasília signage voice — while Inter stays a quiet, legible workhorse for body copy. Playfair italic is the one warm break in the system, reserved for tenure facts ("quase 20 anos") and direct quotes, so the civic-monumental world never reads cold.

### Hierarchy
- **Display / H1** (800, `clamp(1.9rem, 3.2vw, 2.5rem)`, 1.05): hero headline only.
- **H2** (800, `clamp(1.8rem, 4vw, 2.75rem)`, uppercase, max 28ch): section headings. No kicker/eyebrow ever precedes it — the heading carries its own context.
- **H3** (700, `clamp(1.3rem, 2.2vw, 1.5rem)`, sentence case): service-row titles, diferencial titles.
- **Body** (400, 1rem, 1.6, 65ch measure): all paragraph copy.
- **Ink accent** (Playfair italic 600): tenure facts and quotes only.

### Named Rules
**The No-Kicker Rule.** No small uppercase label sits above a heading anywhere on the page; the heading itself always carries the section's context.

## Layout

Single scrolling column of full-width sections (`.section-pad`, 96px block padding) alternating light (`concrete-050`/`concrete-100`) and dark (`purple-900`) grounds for rhythm. Content is centered in a 1200px `.container`. The hero and "sobre" sections use a two-column CSS Grid above 760px (copy + arch-framed photo) that collapses to a single stacked column below it; grid items carry `min-width: 0` so long uppercase headlines wrap inside their own column instead of forcing the photo column to collapse. The services section is a vertically stacked list of alternating photo-left/photo-right rows (never a card grid). Header nav and the mobile hamburger drawer appear at the 980px breakpoint.

## Elevation & Depth

Flat by default; shadows are neutral (pure black, never color-tinted) and used only for real lift: buttons, the hero/founder arch photo frames, and floating/sticky WhatsApp controls. No colored glow shadows anywhere, including on dark sections — a deliberate rejection of the "AI-generated UI" glow look.

### Shadow Vocabulary
- **sm** (`0 2px 8px rgba(0,0,0,0.10)`): subtle card/testimonial lift.
- **md** (`0 10px 30px rgba(0,0,0,0.16)`): buttons, the map frame.
- **lg** (`0 24px 64px rgba(0,0,0,0.22)`): the hero and founder arch photo frames.

### Named Rules
**The Neutral Shadow Rule.** Every shadow in the system is black-based, regardless of the surface it sits on; colored halos are never used, on light or dark grounds.

## Shapes

The arch is the one recurring silhouette, standing in for Niemeyer's concrete curves: every photo (hero, founder, each service row) sits inside a frame whose top is a wide ellipse (`arch-lg`/`arch-md` radius tokens) and whose bottom is square. Buttons stay pill-shaped (999px) — a deliberate exception, since the WhatsApp CTA's familiar stadium shape is a conversion affordance, not a decoration. Section seams are marked by a repeating scalloped "colonnade" divider (a tiled radial-gradient, not an SVG asset) rather than a plain rule or gradient fade.

## Components

### Buttons
- **Shape:** full pill (999px), bold 700-weight label, 22px inline icon.
- **Primary (WhatsApp):** solid `#0C7A42` / white text / neutral shadow-md, darkens to `#0A6B3A` with shadow-lg on hover. Used for every conversion CTA; never recolored by section.
- **Gold (on dark sections only):** solid `#B0D575` / `purple-900` text — the secondary CTA voice reserved for the two full-bleed dark CTA sections.
- **Secondary:** a plain underlined text link (gold underline on dark, lime on light), never a bordered ghost button.

### Cards
- **Testimonial card:** mostly square corners with one soft corner (`4px 4px 28px 4px`) — intentionally not a uniform rounded rectangle, to avoid the generic card-grid look. Large Playfair quote mark, name + stars footer, shadow-sm.
- **Service "row" (not a card):** full-width alternating photo/text module with an arch-framed photo; explicitly rejects the icon-plus-heading-plus-text card grid pattern.

### Navigation
- **Header:** fixed, translucent warm-white with blur, logo + text nav (desktop) or hamburger (mobile). Nav links are pill-hover, not underline-hover.
- **Mobile drawer:** full-height slide-in panel from the right; its WhatsApp CTA is force-specificity-pinned to white-on-green (`'.mobile-nav a.btn--whatsapp'`) so the drawer's own link-color rule can never regress it to dark text on green.

### Signature Component: Arch photo frame
Every real studio photo (never stock) is held inside the arch frame described in Shapes, with an optional small pill "plaque" label (e.g. "Lago Sul · desde sempre") anchored at its base — the system's one recurring, ownable visual device.

## Do's and Don'ts

### Do:
- **Do** frame every photograph in the arch silhouette (`arch-lg` for hero-scale, `arch-md` elsewhere).
- **Do** keep WhatsApp green and its pill shape exactly as specified; it is the conversion mechanism.
- **Do** mark light/dark section seams with the scalloped colonnade divider.
- **Do** keep headings self-sufficient — never add a kicker/eyebrow label above one.
- **Do** verify new long headlines against their column's `min-width: 0` grid item before shipping; an unbroken uppercase Syne word wider than its column will overflow behind an adjacent image if the fix is dropped.

### Don't:
- **Don't** introduce a uniform icon-in-a-circle card grid for features or services.
- **Don't** add a hero-metric stat-tile block (big number / small label) — use the single-line civic "proof plaque" strip instead.
- **Don't** use colored or glowing box-shadows, on light or dark grounds.
- **Don't** invent new testimonials, reviews, or statistics; all social proof on this page is real (Google 5.0/77 reviews, named testimonials) and must stay that way.
- **Don't** change the `.wa-btn` class, `data-wa-location` attributes, or the inline Google Ads conversion script at the bottom of `index.html` — they drive live ad-campaign conversion tracking.
