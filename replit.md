# FinaSimples - WhatsApp Financial Management Platform

## Overview

FinaSimples is a Brazilian fintech landing page for a WhatsApp-based financial management service. The application provides a marketing website showcasing personal and business financial management plans delivered entirely through WhatsApp, eliminating the need for dedicated mobile apps. The platform targets Brazilian users (Pessoa Física and Pessoa Jurídica) with a modern, accessible design inspired by Nubank and Mercado Pago aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application with Home and NotFound routes)
- **React Query (@tanstack/react-query)** for server state management with custom query client configuration

**UI Component System**
- **shadcn/ui** component library (New York style variant) with Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom theming system supporting light/dark modes via CSS variables
- Component structure follows atomic design with reusable UI primitives in `client/src/components/ui/`

**Design System**
- **Color Palette**: Primary green (143 87% 45%), deep blue (240 100% 50%), golden yellow (48 87% 52%)
- **Typography**: Inter for body/headers, Space Grotesk for accent numbers
- **Layout**: Mobile-first responsive design with max-width containers (max-w-7xl)
- **Spacing**: Consistent Tailwind spacing primitives (4, 6, 8, 12, 16, 20, 24)

**Page Structure**
- Single-page landing experience (`/`) with scrollable sections:
  - Hero with gradient background and CTA buttons
  - How It Works (3-step process)
  - Pricing (PF and PJ plans with Asaas payment integration)
  - Features grid (6 core features)
  - Footer with social links
  - Floating WhatsApp button (appears on scroll)

### Backend Architecture

**Server Framework**
- **Express.js** TypeScript server with middleware pattern
- Custom Vite integration for SSR/development mode
- Middleware logging for API requests with duration tracking
- Error handling middleware for consistent error responses

**Storage Layer**
- **In-memory storage** (`MemStorage` class) implementing `IStorage` interface
- User CRUD operations (getUser, getUserByUsername, createUser)
- Designed for easy swap to persistent storage (database-ready interface)

**Database Schema**
- **Drizzle ORM** configured for PostgreSQL with schema defined in `shared/schema.ts`
- Users table with UUID primary keys, username (unique), and password fields
- Zod validation schemas auto-generated from Drizzle schema (`drizzle-zod`)

**API Design**
- RESTful API structure with `/api` prefix convention
- Routes registered in `server/routes.ts` with HTTP server creation
- Separation of concerns: routes, storage layer, and business logic

### External Dependencies

**Third-Party Services**
- **WhatsApp Integration**: External links to `wa.me/5511999999999` for user engagement
- **Payment Gateway**: Asaas payment links for subscription management
  - PF Plan: `https://www.asaas.com/c/lpo68or5lg3qqcsl`
  - PJ Plan: `https://www.asaas.com/c/xdxs6mis7090sg54`

**Database & Infrastructure**
- **Neon Database** (@neondatabase/serverless) for PostgreSQL serverless connections
- Database URL configured via `DATABASE_URL` environment variable
- **Drizzle Kit** for schema migrations (output to `./migrations`)

**Development Tools**
- **Replit-specific plugins**:
  - `@replit/vite-plugin-runtime-error-modal` for error overlays
  - `@replit/vite-plugin-cartographer` for code navigation
  - `@replit/vite-plugin-dev-banner` for development indicators

**Asset Management**
- Static assets stored in `attached_assets/` directory
- Logo and generated marketing images (WhatsApp mockups, illustrations)
- Custom Vite alias `@assets` for asset imports

**Styling Dependencies**
- **Tailwind CSS** with PostCSS and Autoprefixer
- **class-variance-authority** for variant-based component styling
- **clsx** and **tailwind-merge** for conditional className composition
- Google Fonts integration (Inter, Space Grotesk)

**Form & Data Handling**
- **React Hook Form** with `@hookform/resolvers` for form validation
- **Zod** for schema validation and type inference
- **date-fns** for date manipulation utilities