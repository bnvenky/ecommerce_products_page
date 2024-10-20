/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './AddToCartModal.css';

const AddToCartModal = ({ product, onClose }) => {
  const handleAddToCart = () => {
    console.log('Added to cart:', product);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Your Cart</h1>
        <div className="modal-product">
          <img src={product.thumbnail} alt={product.name} />
          <div className="modal-product-info">
            <h3 className="para">{product.title}</h3>
            <p className="para">₹{product.price}</p>
          </div>
        </div>
        <div className="modal-actions">
          <button onClick={handleAddToCart} className="confirm-btn">
            Confirm
          </button>
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
