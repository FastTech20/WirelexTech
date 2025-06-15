import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './componets/layout/Sidebar';
import Navbar from './componets/layout/Navbar';
import Dashboard from './componets/pages/Dashboard'
import AirtelTigo from '../src/componets/pages/AirtleTigo'
import Telecel from '../src/componets/pages/Telecel'
import Wallet from '../src/componets/pages/Wallet'
import Account from './componets/pages/Account'
import Orders from '../src/componets/pages/Oders'
import MTN from '../src/componets/pages/MTN'
import AFA from './componets/pages/Afa'
import Support from './componets/pages/Support'



 

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 bg-light flex-1 overflow-auto">
          <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mtn-data" element={<MTN />} />
            <Route path="/airtel-tigo" element={<AirtelTigo />} />
            <Route path="/telecel" element={<Telecel />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wallet" element={<Wallet />} />
            {/* <Route path="/community" element={<Community />} /> */}
            <Route path="/mtn-afa" element={<AFA />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;