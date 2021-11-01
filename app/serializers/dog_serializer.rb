class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :owner_name, :breed, :img_url, :walk_time, :walk, :date, :user_id

  belongs_to :user
end
