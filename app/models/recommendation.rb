class Recommendation < ApplicationRecord
  belongs_to :author, class_name: 'User'
  belongs_to :target, class_name: 'User'
end
