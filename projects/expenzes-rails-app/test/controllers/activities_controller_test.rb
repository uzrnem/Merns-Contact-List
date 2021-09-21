require 'test_helper'

class ActivitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @activity = activities(:one)
  end

  test "should get index" do
    get activities_url, as: :json
    assert_response :success
  end

  test "should create activity" do
    assert_difference('Activity.count') do
      post activities_url, params: { activity: { amount: @activity.amount, event_date: @activity.event_date, from_account_id: @activity.from_account_id, remarks: @activity.remarks, tags_id: @activity.tags_id, to_account_id: @activity.to_account_id, transaction_types_id: @activity.transaction_types_id } }, as: :json
    end

    assert_response 201
  end

  test "should show activity" do
    get activity_url(@activity), as: :json
    assert_response :success
  end

  test "should update activity" do
    patch activity_url(@activity), params: { activity: { amount: @activity.amount, event_date: @activity.event_date, from_account_id: @activity.from_account_id, remarks: @activity.remarks, tags_id: @activity.tags_id, to_account_id: @activity.to_account_id, transaction_types_id: @activity.transaction_types_id } }, as: :json
    assert_response 200
  end

  test "should destroy activity" do
    assert_difference('Activity.count', -1) do
      delete activity_url(@activity), as: :json
    end

    assert_response 204
  end
end
