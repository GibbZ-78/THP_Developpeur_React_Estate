class Recommendation < ApplicationRecord
  belongs_to :author, class_name: :user
  belongs_to :target, class_name: :user
end
