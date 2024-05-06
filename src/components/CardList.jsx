import React, { useState, useEffect } from 'react';

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [numProducts, setNumProducts] = useState(0);
  const [overallCount, setOverallCount] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
        setNumProducts(data.products.length);
        setOverallCount(data.products.length);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numProducts && i < products.length; i++) {
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

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== '') { 
      setNumProducts(parseInt(value));
    } else {
      setNumProducts(parseInt(overallCount));
    }
  };

  return (
    <div className="card-list">
    <input type="text" id="inputField" name="inputField" onChange={handleInputChange} />
    {renderCards()}
  </div>
  );
};

export default CardList;
