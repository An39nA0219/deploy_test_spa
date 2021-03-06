class AnimalsController < ApplicationController
  def index
    animals = Animal.all.select(:color, :name)
    render json: {
      status: "success",
      animals: animals
    }
  end

  def create
    if Animal.create(animals_params)
      render json: {
        status: "success"
      }
    else
      render json: {
        status: "failed",
        error_msg: "予期せぬエラー"
      }
    end
  end

  private

  def animals_params
    params.require(:animal).permit(:name, :color)
  end
end
