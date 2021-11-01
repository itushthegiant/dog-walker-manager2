class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :owner_name
      t.string :breed
      t.string :img_url
      t.string :walk_time
      t.string :walk
      t.string :date
      t.integer :user_id

      t.timestamps
    end
  end
end
