// src/components/Dashboard.js
import React from 'react';
// import '../Style/dashboard.css'
 
const Dashboard = () => {
  return (
    <div className="bg-[#f1f5f9] min-h-screen pt-6 md:pt-4 md:pl-7 lg:pl-7 
   sm:ml-0 sm:pl-3.5">

      <h1 className="text-2xl font-extrabold text-blue-700 pl-2.5">Welcome, <span>Fel</span></h1>

      <div className="grid gap-5 
  grid-cols-1        
  sm:grid-cols-1     
  md:grid-cols-2 
  lg:grid-cols-3
  p-3">

  <div className="bg-white h-40 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1">Current Balance</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">₵0.00</h2>
    <button className="bg-blue-700 rounded-md w-full text-white font-bold p-4 cursor-pointer">
      Top Up
    </button>
  </div>

  <div className="bg-white h-40 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1">Total Orders</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">0</h2>
  </div>

  <div className="bg-white h-40 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1">Sales</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">₵0.00</h2>
  </div>

  <div className="bg-white h-40 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1">Current Commission</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">₵0.00</h2>
  </div>
</div> 

    </div>
  );
};


export default Dashboard;
