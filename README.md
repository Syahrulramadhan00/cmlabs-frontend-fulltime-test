# MealApp — CMLABS Frontend Pre-assessment

MealApp is a responsive web app for browsing ingredients, exploring meals, and reading detailed cooking instructions from TheMealDB API. It was created for the Front-end Developer Practical Task at PT CMLABS INDONESIA DIGITAL.

**Live demo:** https://cmlabs-frontend-fulltime-test-liart.vercel.app/

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- TanStack Query
- Axios
- Tailwind CSS
- tailwind-merge
- lucide-react

## Features

- Browse ingredients on the landing page
- Search ingredients instantly on the client side
- Load ingredients in batches with infinite scroll behavior
- View meals for a selected ingredient
- Search meals within an ingredient detail page
- Open full meal details with ingredients, instructions, and video tutorials
- Show clear empty, loading, and error states

## Architecture

The project follows Clean Architecture ideas together with Atomic Design for the UI layer:

- Domain layer: core types and data models
- Infrastructure layer: API clients and repository functions
- Application layer: TanStack Query hooks for server state
- Presentation layer: reusable UI components and app routes

## Project structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── provider.tsx
│   ├── ingredients/
│   │   └── [ingredient]/page.tsx
│   └── meals/
│       └── [id]/page.tsx
├── components/
│   ├── atoms/
│   ├── molecules/
│   │   ├── IngredientCard.tsx
│   │   ├── MealCard.tsx
│   │   ├── PageHeader.tsx
│   │   ├── SearchBar.tsx
│   │   └── SearchEmptyState.tsx
│   └── organisms/
├── core/
│   └── types/
│       └── meal.ts
├── data/
│   └── api/
│       ├── axiosClient.ts
│       └── mealRepositories.ts
└── hooks/
    └── queries/
        └── useMeal.ts
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — build the app for production
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Notes

- The app uses the public TheMealDB API.
- Dynamic route params are handled with React's `use()` in client components.
- Meal details are formatted with helper utilities in `src/utils/mealFormatters.ts`.
