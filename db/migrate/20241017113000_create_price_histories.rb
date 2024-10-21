class CreatePriceHistories < ActiveRecord::Migration[7.2]
  def change
    create_table :price_histories do |t|
      t.references :stock, null: false, foreign_key: true
      t.date :date
      t.decimal :price

      t.timestamps
    end
  end
end
