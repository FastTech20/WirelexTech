import React from 'react';
import '../Style/airtime.css';

const Telecel = () => {
  return (
    <div className="airtime-container">
      <h1 className="airtime-title">Telecel</h1>
      <p className="airtime-price">₵3.90 – ₵210.00</p>

      <div className="airtime-card">
        <label className="airtime-label">Packages</label>
        <select className="airtime-select">
          <option>Choose an option</option>
          <option>₵5 - 400MB</option>
          <option>₵10 - 1.2GB</option>
          <option>₵20 - 3GB</option>
        </select>

        <label className="airtime-label">Telecel quantity</label>
        <input type="number" className="airtime-input" placeholder="Enter quantity" />

        <button className="airtime-button">Add to cart</button>

        <div className="airtime-footer">
          <p>SKU: <span className="airtime-tag">Telecel-Data</span></p>
          <p>Category: <span className="airtime-tag">Telecel</span></p>
        </div>
      </div>
    </div>
  );
};

export default Telecel;
