import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import StockList from './StockList';
import { chartOptions } from './Utils';

const StockDetails = () => {
  const [stock, setStock] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchStockData = async () => {
      const response = await axios.get(`/api/v1/stocks/${id}`);
      setStock(response.data.stock);
      setPriceHistory(response.data.price_history);
    };
    fetchStockData();
  }, [id]);

  if (!stock || !priceHistory["Time Series (5min)"]) return <div>Loading...</div>;

  const options = chartOptions(stock, priceHistory)

  return (
    <div className='container mx-auto my-auto px-4 pt-5'>
      <h1>
        { stock.name }
      </h1>
      <div>
        <StockList />
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
          containerProps={{ style: { height: '80vh' } }}
        />
      </div>
    </div>
  );
};

export default StockDetails;