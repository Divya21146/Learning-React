import React, { useState, useEffect } from 'react';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < 5 && i < products.length; i++) {
      const product = products[i];
      cards.push(
        <div key={product.id} className="card">
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.category} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      );
    }
    return cards;
  };

  return (
    <div className="card-list">
      {renderCards()}
    </div>
  );
};

export default CardList;
