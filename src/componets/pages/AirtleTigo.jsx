// src/componets/pages/AirtleTigo.jsx
import React from 'react';
import '../Style/airteltigo.css';

const AirtelTigo = () => {
  return (
    <div className="airteltigo-container">
      <div className="airteltigo-title">AirtelTigo</div>
      <div className="airteltigo-price">₵3.90 – ₵210.00</div>

      <label>Packages</label>
      <select className="package-select">
        <option>Choose an option</option>
        <option>₵3.90 - 300MB</option>
        <option>₵10.00 - 1GB</option>
        <option>₵20.00 - 2.5GB</option>
        {/* Add more as needed */}
      </select>

      <label>AirtelTigo Quantity</label>
      <input className="quantity-input" type="number" min="1" placeholder="Enter quantity" />

      <button className="add-to-cart-btn">Add to Cart</button>

      <div className="meta-info">
        <p>SKU: iShare</p>
        <p>Category: AirtelTigo</p>
      </div>
    </div>
  );
};

export default AirtelTigo;
