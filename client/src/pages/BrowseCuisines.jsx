import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// A map to assign flag emojis to each country/cuisine for premium visual polish
const flagMap = {
  American: '🇺🇸',
  British: '🇬🇧',
  Canadian: '🇨🇦',
  Chinese: '🇨🇳',
  Croatian: '🇭🇷',
  Dutch: '🇳🇱',
  Egyptian: '🇪🇬',
  Filipino: '🇵🇭',
  French: '🇫🇷',
  Greek: '🇬🇷',
  Indian: '🇮🇳',
  Irish: '🇮🇪',
  Italian: '🇮🇹',
  Jamaican: '🇯🇲',
  Japanese: '🇯🇵',
  Kenyan: '🇰🇪',
  Malaysian: '🇲🇾',
  Mexican: '🇲🇽',
  Moroccan: '🇲🇦',
  Polish: '🇵🇱',
  Portuguese: '🇵🇹',
  Russian: '🇷🇺',
  Spanish: '🇪🇸',
  Thai: '🇹🇭',
  Tunisian: '🇹🇳',
  Turkish: '🇹🇷',
  Ukrainian: '🇺🇦',
  Unknown: '🍽️',
  Vietnamese: '🇻🇳'
};

function BrowseCuisines() {
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/cuisines')
      .then(response => {
        if (response.data && response.data.meals) {
          setCuisines(response.data.meals);
        } else {
          setCuisines([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching cuisines:', err);
        setError('Failed to load global cuisines list.');
        setLoading(false);
      });
  }, []);

  const handleCuisineClick = (cuisineName) => {
    navigate(`/cuisine/${cuisineName}`);
  };

  return (
    <div className="container">
      <div className="section-header">
        <div>
          <h2 className="section-title">Browse by Cuisine</h2>
          <p className="section-subtitle">Embark on a gastronomic journey across global traditions</p>
        </div>
      </div>

      {loading ? (
        <div className="loading-wrapper">
          <div className="loading-spinner"></div>
          <p>Assembling regional masterclasses...</p>
        </div>
      ) : error ? (
        <div className="error-wrapper">
          <p className="error-title">Error Loading Cuisines</p>
          <p>{error}</p>
        </div>
      ) : (
        <div className="cuisines-grid">
          {cuisines.map((cuisine, index) => {
            const name = cuisine.strArea;
            const flag = flagMap[name] || '🍽️';
            return (
              <div
                key={index}
                className="cuisine-card"
                onClick={() => handleCuisineClick(name)}
              >
                <span className="cuisine-flag-emoji">{flag}</span>
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BrowseCuisines;
