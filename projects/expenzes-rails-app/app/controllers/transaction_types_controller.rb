class TransactionTypesController < ApplicationController
  before_action :set_transaction_type, only: [:show, :update, :destroy]

  # GET /transaction_types
  def index
    @transaction_types = TransactionType.all

    render json: @transaction_types
  end

  # GET /transaction_types/1
  def show
    render json: @transaction_type
  end

  # POST /transaction_types
  def create
    @transaction_type = TransactionType.new(transaction_type_params)

    if @transaction_type.save
      render json: @transaction_type, status: :created, location: @transaction_type
    else
      render json: @transaction_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /transaction_types/1
  def update
    if @transaction_type.update(transaction_type_params)
      render json: @transaction_type
    else
      render json: @transaction_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /transaction_types/1
  def destroy
    @transaction_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaction_type
      @transaction_type = TransactionType.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def transaction_type_params
      params.require(:transaction_type).permit(:name, :slug)
    end
end
