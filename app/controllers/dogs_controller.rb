class DogsController < ApplicationController
    before_action :find_dog, except: [:create, :index]
    before_action :current_user

    # show all dogs
    def index
        render json: current_user.dogs, status: :ok
    end

    # create a dog
    def create
        if current_user
            dog = current_user.dogs.create!(dog_params)
            render json: dog, status: :created
        end
    end
    

    # show dog dogs/:id
    def show
        render json: @dog, status: :ok
    end

    # update dog dogs/:id
    def update
        @dog.update!(dog_params)
        render json: @dog, status: :ok
    end

    # destroy dog dogs/:id
    def destroy
        if current_user
            current_user.dogs.find_by(id: params[:id]).destroy
            head :no_content
        end
    end

    private

    def find_dog
        @dog = Dog.find_by(id: params[:id])
    end

    def dog_params
        params.permit(:name, :age, :owner_name, :breed, :img_url, :walk_time, :walk_date)
    end

   
end
