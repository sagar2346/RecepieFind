import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import RecipeDetail from './pages/RecipeDetail';
import BrowseCategories from './pages/BrowseCategories';
import CategoryResults from './pages/CategoryResults';
import BrowseCuisines from './pages/BrowseCuisines';
import CuisineResults from './pages/CuisineResults';
import Favorites from './pages/Favorites';
import RandomRecipe from './pages/RandomRecipe';
import MealPlanner from './pages/MealPlanner';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <span className="logo-icon">🍳</span>
              <span>GourmetFind</span>
            </Link>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/cuisines" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Cuisines
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Favorites
                </NavLink>
              </li>
              <li>
                <NavLink to="/planner" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Meal Planner
                </NavLink>
              </li>
              <li>
                <NavLink to="/random" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Random
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/categories" element={<BrowseCategories />} />
            <Route path="/category/:name" element={<CategoryResults />} />
            <Route path="/cuisines" element={<BrowseCuisines />} />
            <Route path="/cuisine/:name" element={<CuisineResults />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/random" element={<RandomRecipe />} />
            <Route path="/planner" element={<MealPlanner />} />
          </Routes>
        </main>

        {/* Consistent Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} GourmetFind. All rights reserved. Designed for Culinary Excellence.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
