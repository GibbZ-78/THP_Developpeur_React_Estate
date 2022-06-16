class CreatePropertyTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :property_types do |t|
      t.string :property_type_title
      t.text :property_type_desc

      t.timestamps
    end
  end
end
