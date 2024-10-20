/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <div className="product-rating">
        {product.rating} stars
      </div>
      <p className="product-price">₹{product.price}</p>
      <div className="product-actions">
        <Link to={{pathname: `/thank-you/${encodeURIComponent(product.id)}`, state: { product } }} className="view-product-btn">
          View Product
        </Link>
        <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
    
  );
};

export default ProductCard;
