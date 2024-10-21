import React, { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../context/tokenContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await axios.get('/api/v1/stocks', 
        { headers: 
          {"Token" :  token } }
      );

      setStocks(response.data);
    };
    fetchStocks();
  }, []);

  return (
    <div className='container my-5' style={{display: 'flex'}}>
      {stocks.map(stock => (
        <div key={stock.id} style={{ fontSize: "12px" }}>
          <Link to={`/stocks/${stock.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-1 my-5'>{stock.symbol}</Link>
        </div>
      ))}
    </div>
  );
};

export default StockList;