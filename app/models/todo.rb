class Todo < ApplicationRecord

  enum status: {waiting: 0, done: 1}
end
