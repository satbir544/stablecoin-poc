// src/Accounts.js
import React from 'react';
import './accounts.css';
import SideNav from './sideNav';

function Accounts() {
  return (
    <div className='accounts'>
      <SideNav />
      <div className='content'>
        <h2>ACCOUNTS</h2>
        
        {/* Sample Card */}
        <div className='card'>
          <h3>Savings</h3>
          <p>Account Number: 1234</p>
          <p>Balance: $1,000.00</p>
        </div>

        {/* Add Account Button */}
        <div className="add-account-button">
          <button>Add Account</button>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
