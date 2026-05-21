#  GourmetFind - Premium Recipe Finder & Meal Planner

A highly polished, full-stack web application built using **Node.js, Express, React (Vite), React Router, and Axios**, proxying **TheMealDB API**. 

This application offers 10 complete and custom-designed pages with a beautiful responsive layout. It features interactive global cuisines (with flag emojis), meal category filters, in-memory favorites management, a culinary roulette (random recipe roll), and a weekly meal planner calendar.

---

##  Design System & Colors
The application is styled using premium, flexible **Vanilla CSS Variables** adhering to the following visual rules:
- **Background**: White (`#FFFFFF`)
- **Primary Color**: Deep Blue (`#1E3A5F`) for brand headers, buttons, navigation links, and structural highlights.
- **Accent Color**: Orange (`#F97316`) for active highlights, tag badges, and interactive hover feedback.
- **Text**: Dark Gray (`#1F2937`) for high contrast readability and modern body styling.
- **Card Background**: Light Gray (`#F9FAFB`) with subtle box-shadows.
- **Typography**: `Poppins` Google Font.

---

## Key Features & Pages
1. **Home** — Elegant hero section, dynamic search bar, and custom-loaded featured recipes grid.
2. **Search Results** — Dynamic query-based results page showing loaded cards matching search parameters.
3. **Recipe Detail** — Renders rich ingredients and measurement cards, dynamic instructions steps list, action strip, and responsive YouTube video guides.
4. **Browse Categories** — Beautiful layout cards illustrating meal classifications (Breakfast, Seafood, Dessert, etc.).
5. **Category Results** — Focus view presenting all recipes within a selected category.
6. **Browse Cuisine** — Custom international flag board for regional cuisine matching.
7. **Cuisine Results** — Discovers specific regional delicacies (Italian, Indian, Japanese, etc.).
8. **Favorites** — In-memory user cookbook vault with responsive API remove triggers.
9. **Culinary Roulette (Random)** — Surprise recipe drawer with an instant "Roll Another Recipe" click trigger.
10. **Weekly Meal Planner** — Mon-Sun grid mapping, showing loaded meals and custom delete bindings.

---

##  Technology Stack
* **Frontend**: React 18, Vite, React Router v6, Axios, Google Fonts.
* **Backend**: Express, Cors, Axios (Proxy layer calls to TheMealDB API), Dotenv, Nodemon.
* **Storage**: Backend Transient In-Memory arrays and day-keyed maps. (Zero-DB setup for rapid, simple onboarding).

---

##  Getting Started & Installation

Follow these easy steps to get GourmetFind running locally on your computer:

### 1. Install all dependencies:
At the root directory, run the following single command to install packages for both client and server:
```bash
npm run install:all
```

### 2. Launch the Development Server:
To run both the backend (on port `5000`) and the frontend (on port `3000` with automated API proxying) concurrently:
```bash
npm run dev
```

### 3. Open the Application:
Open your browser and navigate to:
```
http://localhost:3000
```
*(The frontend will automatically proxy all `/api` requests to the Express server running on port `5000`).*
