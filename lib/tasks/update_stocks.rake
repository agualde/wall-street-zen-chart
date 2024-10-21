namespace :stocks do
  desc "Update price history for all stocks"
  task update_price_history: :environment do
    Stock.find_each do |stock|
      StockDataService.update_price_history(stock)
    end
  end
end