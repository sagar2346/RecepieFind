import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CuisineResults() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`/api/recipes/cuisine/${name}`)
      .then(response => {
        if (response.data && response.data.meals) {
          setRecipes(response.data.meals);
        } else {
          setRecipes([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error fetching cuisine recipes for ${name}:`, err);
        setError(`Failed to fetch recipes for cuisine: ${name}`);
        setLoading(false);
      });
  }, [name]);

  return (
    <div className="container">
      <div className="section-header">
        <div>
          <h2 className="section-title">{name} Culinary Classics</h2>
          <p className="section-subtitle">A collection of regional dishes in the {name} culinary style</p>
        </div>
        <Link to="/cuisines" className="btn btn-secondary">
          ⬅ Back to Cuisines
        </Link>
      </div>

      {loading ? (
        <div className="loading-wrapper">
          <div className="loading-spinner"></div>
          <p>Uncovering local secrets of {name} chefs...</p>
        </div>
      ) : error ? (
        <div className="error-wrapper">
          <p className="error-title">Failed to Load</p>
          <p>{error}</p>
        </div>
      ) : recipes.length === 0 ? (
        <div className="empty-wrapper">
          <p className="empty-title">No Recipes Found</p>
          <p>No recipes were found in this cuisine style.</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <div className="recipe-card-img-wrapper">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="recipe-card-img"
                  loading="lazy"
                />
              </div>
              <div className="recipe-card-content">
                <h3 className="recipe-card-title">{recipe.strMeal}</h3>
                <div className="recipe-card-info">
                  <span>📍 {name} Style</span>
                  <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card-btn">
                    View Recipe ➔
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CuisineResults;
