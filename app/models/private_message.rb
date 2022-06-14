class PrivateMessage < ApplicationRecord
  belongs_to :sender, class_name: :user
  belongs_to :recipient, class_name: :user
end
