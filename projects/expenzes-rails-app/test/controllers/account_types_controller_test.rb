require 'test_helper'

class AccountTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @account_type = account_types(:one)
  end

  test "should get index" do
    get account_types_url, as: :json
    assert_response :success
  end

  test "should create account_type" do
    assert_difference('AccountType.count') do
      post account_types_url, params: { account_type: { name: @account_type.name } }, as: :json
    end

    assert_response 201
  end

  test "should show account_type" do
    get account_type_url(@account_type), as: :json
    assert_response :success
  end

  test "should update account_type" do
    patch account_type_url(@account_type), params: { account_type: { name: @account_type.name } }, as: :json
    assert_response 200
  end

  test "should destroy account_type" do
    assert_difference('AccountType.count', -1) do
      delete account_type_url(@account_type), as: :json
    end

    assert_response 204
  end
end
