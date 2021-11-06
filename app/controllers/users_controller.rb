class UsersController < ApplicationController
    before_action :find_user, except: [:create, :index, :show]

    # show all users
    def index
        render json: User.all
    end

    # create a user
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # show user users/:id
    def show
        if current_user
            render json: current_user
        else
            render json: {}, status: :unauthorized
        end
    end

    # update user users/:id
    def update
        @user.update!(user_params)
        render json: @user, status: :ok
    end

    # destroy user users/:id
    def destroy
        @user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
