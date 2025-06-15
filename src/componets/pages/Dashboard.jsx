// src/components/Dashboard.js
import React from 'react';
import '../Style/dashboard.css'
 
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="welcome">Welcome, <span>Fel</span></h1>

      <div className="dashboard-cards">
        <div className="card balance-card">
          <p className="label">Current Balance</p>
          <h2>₵0.00</h2>
          <button className="topup-button">Top Up</button>
        </div>

        <div className="card">
          <p className="label">Total Orders</p>
          <h2>0</h2>
        </div>

        <div className="card">
          <p className="label">Total Sales</p>
          <h2>GH₵ 0.00</h2>
        </div>

        <div className="card">
          <p className="label">Current Commission</p>
          <h2>GH₵ 0.00</h2>
        </div>
      </div>
    </div>
  );
};

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

export default Dashboard;
