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
        <Link style={navStyle} to="/"><h3>Stablecoin POC</h3></Link>
        <ul className='nav-links'>
            <li></li>
        </ul>
    </nav>
  );
}

export default Nav;
