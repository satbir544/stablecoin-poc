// src/Navigation.js
import React from 'react';
import './sideNav.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-link">Accounts</Link>
      <Link to="/beneficiaries" className="nav-link">Beneficiaries</Link>
    </div>
  );
};

export default SideNav;
