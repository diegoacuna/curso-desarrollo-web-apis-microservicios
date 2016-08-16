class Comment < ActiveRecord::Base
  #Validations
  validates :title, presence: true
  validates :content, presence: true
  validates :post, presence: true

  #Relations
  belongs_to :post
end
