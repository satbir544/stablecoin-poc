// src/Accounts.js
import React from 'react';
import './accounts.css';
import SideNav from './sideNav';
import { Link } from 'react-router-dom';

function Accounts() {
  return (
    <div className='accounts'>
      <SideNav />
      <div className='content'>
        <h2>ACCOUNTS</h2>

        {/* Sample Card for savings account */}
        <div className='card'>
          <h3>Savings</h3>
          <p>Account Number: 1234</p>
          <p>Balance: $900.00</p>
        </div>

        {/* Sample Card for stablecoin account*/}
        <div className='card'>
          <h3>Stablecoin</h3>
          <p>Account Number: 0.0.1234</p>
          <p>Balance: 100.00</p>
          {/*top up button*/}
          <div className="top-up-button">
            <Link to="/top-up">
              <button>Top Up</button>
            </Link>
          </div>
        </div>

        {/* Create Account Button */}
        <div className="add-account-button">
          <button>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
