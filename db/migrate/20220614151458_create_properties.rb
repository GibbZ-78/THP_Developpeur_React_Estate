class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :title
      t.float :price
      t.text :description
      t.belongs_to :property_type
      t.belongs_to :user
      t.timestamps
    end
  end
end
