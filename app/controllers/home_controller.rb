class HomeController < ApplicationController
  before_action :encrypt_stocks, only: %i[index]
  
  def index;end

  private

  def encrypt_stocks
    # We could tokenize things for the front end
    # Think current_user.sotck_picks or similar
    stock_ids = Stock.all.pluck(:id) 
    @token = JwtHelper.encrypt(stock_ids:)
  end
end
