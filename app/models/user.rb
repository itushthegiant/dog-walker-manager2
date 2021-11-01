class User < ApplicationRecord
    has_many :dogs

    has_secure_password
end
