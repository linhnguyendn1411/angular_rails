class TodosController < ApplicationController
  before_action :load_todos, only: :destroy
  def index
    @todos = Todo.all
  end

  def create
    todo = Todo.create load_params
    todo.save
    respond_to do |format|
      format.html
      format.json do
        render json: {data: todo}
      end
    end
  end

  def destroy
    @todo.destroy
    respond_to do |format|
      format.html
      format.json do
        render json: {data: @todo}
      end
    end
  end
  private
  def load_params
    params.require(:todo).permit :context, :place, :start_time, :end_time
  end
  def load_todos
    @todo = Todo.find_by id: params[:id]
  end
end
