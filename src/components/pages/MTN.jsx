import React from 'react';
import '../Style/airtime.css';

const MTN = () => {
  return (
    <div className="airtime-container">
      <h1 className="airtime-title">MTN</h1>
      <p className="airtime-price">₵3.90 – ₵210.00</p>

      <div className="airtime-card">
        <label className="airtime-label">Packages</label>
        <select className="airtime-select">
          <option>Choose an option</option>
          <option>₵5 - 500MB</option>
          <option>₵10 - 1GB</option>
          <option>₵20 - 2.5GB</option>
        </select>

        <label className="airtime-label">MTN quantity</label>
        <input type="number" className="airtime-input" placeholder="Enter quantity" />

        <button className="airtime-button">Add to cart</button>

        <div className="airtime-footer">
          <p> WirelxTech:<span className="airtime-tag">MTN-Data</span></p>
          <p>Category: <span className="airtime-tag">MTN</span></p>
        </div>
      </div>
    </div>
  );
};

export default MTN;