class AddImageUrlToProperties < ActiveRecord::Migration[7.0]
  def change
    add_column :properties, :image_url, :string, default: "house_image_not_found.jpg", null: false
  end
end
