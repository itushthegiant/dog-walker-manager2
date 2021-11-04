class AddImgUrlToDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :img_url, :string, default: "https://www.nicepng.com/png/detail/592-5921097_how-to-draw-a-dog-easy-step-by.png"
  end
end
