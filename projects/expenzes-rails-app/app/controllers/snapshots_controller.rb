class SnapshotsController < ApplicationController
  before_action :set_snapshot, only: [:show, :update, :destroy]

  # GET /snapshots
  def index
    @snapshots = Snapshot.all

    render json: @snapshots
  end

  # GET /snapshots/1
  def show
    render json: @snapshot
  end

  # POST /snapshots
  def create
    @snapshot = Snapshot.new(snapshot_params)

    if @snapshot.save
      render json: @snapshot, status: :created, location: @snapshot
    else
      render json: @snapshot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /snapshots/1
  def update
    if @snapshot.update(snapshot_params)
      render json: @snapshot
    else
      render json: @snapshot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /snapshots/1
  def destroy
    @snapshot.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_snapshot
      @snapshot = Snapshot.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def snapshot_params
      params.fetch(:snapshot, {})
    end
end
