import React, { useState, useEffect } from 'react';

const CardList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="card-list">
      {categories.map(category => (
        <div key={category.id} className="card">
          <h2>{category.name}</h2>
          <img src={category.image} alt={category.name} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
