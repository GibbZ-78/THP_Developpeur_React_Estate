class CreateRecommendations < ActiveRecord::Migration[7.0]
  def change
    create_table :recommendations do |t|
      t.text :content
      t.references :author, index: true
      t.references :target, index: true

      t.timestamps
    end
  end
end
