# FinaSimples Landing Page - Design Guidelines

## Design Approach
**Reference-Based: Modern Brazilian Fintech Aesthetic**
Inspired by Nubank's bold simplicity and Mercado Pago's accessible design, creating a trustworthy yet approachable financial service experience optimized for WhatsApp integration.

## Core Design Principles
- **Accessibility First**: WhatsApp-centric service demands mobile-optimized, tap-friendly design
- **Trust Through Simplicity**: Clean layouts with generous whitespace convey professionalism
- **Bold & Friendly**: Balance financial credibility with approachable, conversational tone

## Color Palette

**Primary Colors:**
- Brand Green: 143 87% 45% (primary CTA, accents)
- Deep Blue: 240 100% 50% (trust elements, headers)
- Golden Yellow: 48 87% 52% (highlights, success states)

**Supporting Colors:**
- Dark Navy: 230 35% 15% (text, dark sections)
- Soft White: 0 0% 98% (backgrounds)
- Light Gray: 220 15% 96% (card backgrounds)

**Gradients:**
- Hero gradient: Subtle blue to green diagonal (240 100% 50% to 143 87% 45%)
- Card accents: Soft yellow to white radial overlays

## Typography

**Font Families:**
- Headers: 'Inter' or 'DM Sans' (700-800 weight) - modern, geometric
- Body: 'Inter' (400-500 weight) - clean readability
- Accent/Numbers: 'Space Grotesk' (600 weight) for pricing

**Scale:**
- H1 (Hero): text-5xl md:text-7xl font-bold
- H2 (Section): text-3xl md:text-5xl font-bold
- H3 (Cards): text-2xl md:text-3xl font-semibold
- Body: text-base md:text-lg
- Small: text-sm

## Layout System

**Spacing Primitives:** 
Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm (p-4, gap-8, my-16, etc.)

**Container Strategy:**
- Max width: max-w-7xl mx-auto
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8

## Component Library

### Hero Section
- Full-width gradient background with diagonal flow
- Logo (FinaSimples) top-left, navigation top-right
- Centered headline + subheadline stack
- Dual CTA buttons: Primary "Começar no WhatsApp" (green), Secondary "Ver Planos" (outline)
- Hero image: Modern smartphone mockup showing WhatsApp interface with financial dashboard (right side, 40% width on desktop)
- Trust badges below CTAs: "Seguro" "Rápido" "Fácil" icons

### Como Funciona Section
- White background with 3-column grid (1 col mobile, 3 col desktop)
- Icon cards with: Number badge, icon, title, description
- Icons: Message bubble, chart trending up, shield check
- Soft shadow cards: shadow-lg with rounded-2xl borders

### Pricing Cards
- 2-column grid (stack on mobile)
- Elevated cards with border accents (green for PF, blue for PJ)
- Card structure: Badge label, price (large), feature list with checkmarks, CTA button
- Hover lift effect: hover:scale-105 transition
- Popular badge on PJ plan (yellow accent)

### Features Section
- Alternating image-text rows (bento grid style)
- Mix of full-width and split layouts
- Feature highlights: Real-time updates, WhatsApp integration, Report generation, Financial insights
- Use brand color accents for feature icons

### Footer
- Dark navy background (230 35% 15%)
- 4-column grid: Logo/tagline, Links, Contato, Social
- WhatsApp CTA button remains visible (fixed or repeated)
- Minimal legal text bottom

## Interactions & Motion

**Micro-interactions:**
- Button hover: subtle scale (scale-105) + brightness increase
- Card hover: shadow expansion + lift effect
- Scroll-triggered: fade-in-up for sections (use Intersection Observer)

**Transitions:**
- Standard: transition-all duration-300 ease-in-out
- CTAs: Active state with slight press effect (active:scale-95)

## Images

**Hero Image:**
Large hero image required - Smartphone mockup showing WhatsApp chat interface with financial cards/graphs. Position right side on desktop (40-50% width), full-width on mobile below text. Use clean, bright mockup on subtle gradient background.

**Section Images:**
- Features section: Dashboard screenshots, WhatsApp integration UI, report examples
- How it works: Icon illustrations (custom or from Heroicons/Lucide)
- All images should have rounded corners (rounded-xl) and subtle shadows

## Accessibility

- Maintain WCAG AA contrast (4.5:1 minimum for text)
- WhatsApp green passes AA on white, use dark navy for headers
- Focus states: ring-2 ring-offset-2 ring-brand-green
- Mobile touch targets: min 44x44px (p-3 minimum on buttons)
- Semantic HTML with proper heading hierarchy

## Mobile Optimization

- Stack all multi-column layouts on mobile
- Hero CTA buttons full-width on small screens
- Pricing cards expand to full-width with increased padding
- Fixed WhatsApp button bottom-right on scroll (z-50)
- Hamburger menu for navigation on mobile

---

**Key Deliverable:** A vibrant, trustworthy landing page that immediately communicates simplicity and professionalism, converting visitors through clear value proposition and frictionless WhatsApp CTAs.