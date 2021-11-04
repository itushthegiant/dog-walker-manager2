class AddImgUrlColumnToDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :img_url, :string
  end
end
