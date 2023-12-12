import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color:'white',
    textDecoration: 'none'
  };

  return (
    <nav>
        <Link style={navStyle} to="/"><h3>Logo</h3></Link>
        <ul className='nav-links'>
            <Link style={navStyle} to="/"><li>Accounts</li></Link>
            <Link style={navStyle} to="/beneficiaries"><li>Beneficiaries</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
