class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :content, presence: true
  validates :autor, presence: true

  # Relations
  has_many :comments
end
