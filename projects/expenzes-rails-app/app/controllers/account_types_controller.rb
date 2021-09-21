class AccountTypesController < ApplicationController
  before_action :set_account_type, only: [:show, :update, :destroy]

  # GET /account_types
  def index
    @account_types = AccountType.all

    render json: @account_types
  end

  # GET /account_types/1
  def show
    render json: @account_type
  end

  # POST /account_types
  def create
    @account_type = AccountType.new(account_type_params)

    if @account_type.save
      render json: @account_type, status: :created, location: @account_type
    else
      render json: @account_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /account_types/1
  def update
    if @account_type.update(account_type_params)
      render json: @account_type
    else
      render json: @account_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /account_types/1
  def destroy
    @account_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account_type
      @account_type = AccountType.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def account_type_params
      params.require(:account_type).permit(:name)
    end
end
