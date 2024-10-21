class StockDataService
  def self.fetch_price_history(stock_id)    
    @stock = Stock.find(stock_id)

    url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=#{@stock.symbol}&interval=5min&apikey=HINRMQSA7ZP095BH"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    JSON.parse(response)
    # api_price_history.each do |date, data|
    #   stock.price_histories.find_or_create_by(date: date) do |ph|
    #     ph.price = data.close.to_d
    #   end
    # end
  end
end