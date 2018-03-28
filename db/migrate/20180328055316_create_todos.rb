class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.text :context
      t.integer :repeat
      t.string :place
      t.timestamp :start_time
      t.timestamp :end_time

      t.timestamps
    end
  end
end
