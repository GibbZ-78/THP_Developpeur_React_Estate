class User < ApplicationRecord
  has_many :properties
  has_many :private_messages
  has_many :recommendations

  validates :email, presence: true, uniqueness: true, length: { minimum: 3 }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
