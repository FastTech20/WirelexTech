import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './components/Theme';

import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import MTN from './components/Pages/MTN';
import AirtelTigo from './components/Pages/AIrtelTigo';
import Telecel from './components/Telecel';
import MTNAFA from './components/MTN_AFA';
import TopUp from './components/TOPUP';
import MyOrders from './components/Order';
import Support from './components/Support';
import Login from './components/Pages/Login';
import Logout from './components/Pages/Logout';
import Signup from './components/Pages/Signup';
import LandingPage from './components/Pages/LandingPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        {isAuthenticated && <NavBar />}
        <Routes>
          {!isAuthenticated && <Route path="/" element={<LandingPage />} />}
          {!isAuthenticated && <Route path="/signup" element={<Signup />} />}
          {!isAuthenticated && <Route path="/login" element={<Login onLogin={handleLogin} />} />}

          {isAuthenticated && (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mtn-data" element={<MTN />} />
              <Route path="/airtel-tigo" element={<AirtelTigo />} />
              <Route path="/telecel" element={<Telecel />} />
              <Route path="/mtn-afa" element={<MTNAFA />} />
              <Route path="/wallet" element={<TopUp />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/support" element={<Support />} />
              <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            </>
          )}

          {/* Fallback for undefined routes */}
          <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
