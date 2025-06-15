// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt, FaWifi, FaMoneyBillWave, FaWallet, FaUser,
  FaPlug, FaUsers, FaHeadset, FaSignOutAlt
} from 'react-icons/fa';

import '../Style/Sidebar.css';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: <FaTachometerAlt /> },
  // { name: 'Services', path: '/services', icon: <FaPlug /> },
  { name: 'AirtelTigo', path: '/airtel-tigo', icon: <FaWifi /> },
  { name: 'MTN Data', path: '/mtn-data', icon: <FaWifi /> },
  { name: 'Telecel', path: '/telecel', icon: <FaWifi /> },
  { name: 'MTN AFA', path: '/mtn-afa', icon: <FaWifi /> },
  // { name: 'Transaction', path: '/transactions', icon: <FaMoneyBillWave /> },
  // { name: 'My Orders', path: '/orders', icon: <FaMoneyBillWave /> },
  { name: 'Top up Wallet', path: '/wallet', icon: <FaWallet /> },
  // { name: 'Account', path: '/account', icon: <FaUser /> },
  // { name: 'API', path: '/api', icon: <FaPlug /> },
  { name: 'Join our community', path: '/community', icon: <FaUsers /> },
  { name: 'Support', path: '/support', icon: <FaHeadset /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="logo">WireLexTech</div>
        <nav className="nav">
          {navItems.map(({ name, path, icon }) => (
            <NavLink
              to={path}
              key={name}
              className="nav-item"
              activeclassname="active"
            >
              {icon} <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="footer">
        <div className="user-info">Hello, <strong>Fel</strong></div>
        <div className="balance">Balance: <span>₵0.00</span></div>
        <button className="topup-btn">Top Up</button>
        <NavLink to="/logout" className="logout">
          <FaSignOutAlt /> Log Out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
