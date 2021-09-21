class TagsController < ApplicationController
  before_action :set_tag, only: [:show, :update, :destroy]

  # GET /tags
  def index
    @tags = Tag.order('name ASC')

    render json: @tags
  end

  # GET /tags/1
  def show
    render json: @tag
  end

  # POST /tags
  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render json: @tag, status: :created, location: @tag
    else
      render json: @tag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tags/1
  def update
    if @tag.update(tag_params)
      render json: @tag
    else
      render json: @tag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tags/1
  def destroy
    @tag.destroy
  end

  def transaction_types
    if !params[:tag_id].nil? && params[:tag_id].to_i > 0
      render json: Tag.where(:tag_id => params[:tag_id])
    else
      transactionType = 'transfer'
      if params[:from] == "0"
        transactionType = 'credit'
      elsif params[:to] == "0"
        transactionType = 'debit'
      end
      render json: Tag.joins(:transaction_type).where(transaction_types: { slug: transactionType}, tag_id: nil)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tag
      @tag = Tag.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tag_params
      params.require(:tag).permit(:name, :transaction_types_id)
    end
end
