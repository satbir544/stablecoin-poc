import React from 'react';
import './App.css';
import Accounts from './accounts';
import Beneficiaries from './beneficiaries';
import TopUp from './topUp';
import Nav from './Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Accounts/>}/>
          <Route path="/accounts" element={<Accounts/>}/>
          <Route path="/beneficiaries" element={<Beneficiaries/>}/>
          <Route path="/top-up" element={<TopUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
