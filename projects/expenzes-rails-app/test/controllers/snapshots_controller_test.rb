require 'test_helper'

class SnapshotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @snapshot = snapshots(:one)
  end

  test "should get index" do
    get snapshots_url, as: :json
    assert_response :success
  end

  test "should create snapshot" do
    assert_difference('Snapshot.count') do
      post snapshots_url, params: { snapshot: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show snapshot" do
    get snapshot_url(@snapshot), as: :json
    assert_response :success
  end

  test "should update snapshot" do
    patch snapshot_url(@snapshot), params: { snapshot: {  } }, as: :json
    assert_response 200
  end

  test "should destroy snapshot" do
    assert_difference('Snapshot.count', -1) do
      delete snapshot_url(@snapshot), as: :json
    end

    assert_response 204
  end
end
