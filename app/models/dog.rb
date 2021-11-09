class Dog < ApplicationRecord

    belongs_to :user

    validates_presence_of :name, :age, :owner_name, :walk_time, :walk_date
end
