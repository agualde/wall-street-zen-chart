import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TokenContext } from '../context/tokenContext';
import StockList from './StockList';
import StockDetails from './StockDetails';

const App = ({ token }) => {
  return (
    <TokenContext.Provider value={{ token }}>
      <Router>
        <Routes>
          <Route path="/" element={<StockList />} />
          <Route path="/stocks/:id" element={<StockDetails />} />
        </Routes>
      </Router>  
    </TokenContext.Provider>
  );
};

export default App;
