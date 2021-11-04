class RemoveImgUrlFromDogs < ActiveRecord::Migration[6.1]
  def change
    remove_column :dogs, :img_url, :string
  end
end
