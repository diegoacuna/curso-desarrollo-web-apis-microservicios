json.extract! comment, :id, :title, :content, :created_at, :updated_at
json.url post_comment_url(comment.post_id, comment.id)