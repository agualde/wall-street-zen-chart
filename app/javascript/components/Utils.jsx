export const chartOptions = (stock, priceHistory) => {
  const mappedData = Object.entries(priceHistory["Time Series (5min)"])
  .map(([date, values]) => ([
    new Date(date).getTime(),
    parseFloat(values["1. open"]),
    parseFloat(values["2. high"]),
    parseFloat(values["3. low"]),
    parseFloat(values["4. close"]),
    parseInt(values["5. volume"])
  ]))
  .sort((a, b) => a[0] - b[0]);

return {

chart: {
  // height: '850px',
  animation: true
},
rangeSelector: {
  buttons: [{
    type: 'hour',
    count: 1,
    text: '1h'
  }, {
    type: 'day',
    count: 1,
    text: '1d'
  }, {
    type: 'all',
    text: 'All'
  }],
  selected: 1,
  inputEnabled: false
},
xAxis: {
  type: 'datetime'
},
yAxis: [{
  labels: {
    align: 'right',
    x: -3
  },
  title: {
    text: 'Stock Price'
  },
  height: '50%',
  lineWidth: 2,
  resize: {
    enabled: true
  }
}, {
  labels: {
    align: 'right',
    x: -3
  },
  title: {
    text: 'Volume'
  },
  top: '65%',
  height: '35%',
  offset: 0,
  lineWidth: 2
}],
series: [{
  type: 'candlestick',
  name: `${stock.symbol} Stock Price`,
  data: mappedData.map(d => d.slice(0, 5)),
  dataGrouping: {
    units: [
      ['minute', [5, 15, 30]],
      ['hour', [1, 2, 4, 8]],
      ['day', [1]]
    ]
  },
  tooltip: {
    valueDecimals: 2
  }
}, {
  type: 'column',
  name: 'Volume',
  data: mappedData.map(d => [d[0], d[5]]),
  yAxis: 1,
  dataGrouping: {
    units: [
      ['minute', [5, 15, 30]],
      ['hour', [1, 2, 4, 8]],
      ['day', [1]]
    ]
  }
}]
}};