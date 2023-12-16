// src/TopUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './topUp.css';

function TopUp() {
  const [selectedAccount, setSelectedAccount] = useState('Bob');
  const [amount, setAmount] = useState('');

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBuyClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Handle buy action here
    console.log(`Buying ${amount} Stable Coin for ${selectedAccount}`);
  };

  return (
    <div className="top-up-container">
      <h2>Buy Stable Coin</h2>
      <div className="buy-stable-coin-card">
        <form>
          <div className="form-group">
            <label htmlFor="account">Select Account:</label>
            <select id="account" value={selectedAccount} onChange={handleAccountChange}>
              <option value="Bob">Savings (Bob)</option>
              <option value="Rick">Savings (Rick)</option>
              <option value="Steph">Savings (Steph)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Enter Amount:</label>
            <input type="text" id="amount" value={amount} onChange={handleAmountChange} />
          </div>

          <div className="form-group">
            <button onClick={handleBuyClick}>Buy</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TopUp;
