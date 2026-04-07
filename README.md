# MealApp - CMLABS Frontend Pre-assessment

A responsive web application to browse ingredients, filter delicious meals, and view detailed cooking instructions using TheMealDB API. Built as part of the Front-end Developer Practical Task for PT CMLABS INDONESIA DIGITAL.

🚀 **[Live Demo: Add your Vercel/Netlify link here]**

## 🛠 Tech Stack

* **Framework:** Next.js (App Router) + React
* **Language:** TypeScript
* **State Management & Fetching:** TanStack Query (React Query) + Axios
* **Styling:** Tailwind CSS + `tailwind-merge`
* **Icons:** `lucide-react`

## 🏗 Architecture & Design Patterns

To ensure scalability and maintainability, this project strictly adheres to **Clean Architecture** principles combined with **Atomic Design** for the UI layer.

* **Domain Layer (`core/types`):** TypeScript interfaces defining the core data shapes (Ingredients, Meals, Details).
* **Infrastructure Layer (`data/api`):** Axios instances and API repositories bridging the application to TheMealDB.
* **Application Layer (`hooks/queries`):** Custom TanStack Query hooks managing server state, caching, and loading flags.
* **Presentation Layer (`components` & `app`):** * Divided into Atomic components (`Atoms`, `Molecules`, `Organisms`) for maximum UI reusability.
  * Uses `tailwind-merge` to safely construct dynamic component classes without CSS cascade conflicts.

## ✨ Technical Highlights & Decisions

### 1. Client-Side Lazy Loading (Infinite Scroll)
TheMealDB's `list.php?i=list` endpoint returns hundreds of ingredients at once without server-side pagination support. To prevent UI freezing and DOM bloat, I implemented an **Intersection Observer** paired with `useMemo`. The app loads items in batches of 15 as the user scrolls to the bottom of the screen, ensuring a buttery-smooth UX while preserving the front-end search functionality.

### 2. Next.js 15 Dynamic Route Promises
Successfully handled Next.js 15's transition of dynamic routing parameters to Promises. The `React.use()` hook is utilized to unwrap `params` safely in Client Components before executing data fetches.

### 3. Data Transformation Helpers
To keep the UI components clean, complex

Run the development server:
Bash

npm run dev

Open http://localhost:3000 with your browser to see the result.
📂 Project Structure
Plaintext

src/
├── app/                  # Next.js App Router (Pages & Layouts)
├── components/           # Presentation Layer (Atomic Design)
│   └── molecules/        # Reusable UI (Cards, SearchBar, PageHeader)
├── core/                 # Domain Layer
│   └── types/            # TypeScript Interfaces
├── data/                 # Infrastructure Layer
│   └── api/              # Axios instance & repositories
├── hooks/                # Application Layer
│   └── queries/          # TanStack Query Hooks
└── utils/                # Helper functions and formatters


