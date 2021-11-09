class ChageWalkNameInDogs < ActiveRecord::Migration[6.1]
  def change
    remove_column :dogs, :date
    add_column :dogs, :comments, :string
    rename_column :dogs, :walk, :walk_date
  end
end
