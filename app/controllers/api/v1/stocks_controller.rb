module Api
  module V1
    class StocksController < ApplicationController
      before_action :set_index_token, :set_stocks, only: [:index]
      # before_action :set_token, :set_stocks, only: [:index]

      def index
        render json: @stocks
      end

      def show
        @stock_id = params[:id]
        @stock = Stock.find(@stock_id)
        @price_history = StockDataService.fetch_price_history(@stock_id)

        render json: { stock: @stock, price_history: @price_history }
      end

      private

      def set_index_token
         token = request.headers[:token]
         decrypted_token = JwtHelper.decrypt(token)
         @stock_ids ||= decrypted_token["stock_ids"]
      end

      def set_stocks
        @stocks ||= Stock.where(id: @stock_ids)
      end
    end
  end
end
