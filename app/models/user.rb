class User < ApplicationRecord
    has_many :dogs

    has_secure_password
    
    validates :username, presence: true, uniqueness: true, length: { minimum: 5 }
    validates :password_digest, presence: true, length: { minimum: 5 }
    
end
