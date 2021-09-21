require 'test_helper'

class TransactionTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @transaction_type = transaction_types(:one)
  end

  test "should get index" do
    get transaction_types_url, as: :json
    assert_response :success
  end

  test "should create transaction_type" do
    assert_difference('TransactionType.count') do
      post transaction_types_url, params: { transaction_type: { name: @transaction_type.name, slug: @transaction_type.slug } }, as: :json
    end

    assert_response 201
  end

  test "should show transaction_type" do
    get transaction_type_url(@transaction_type), as: :json
    assert_response :success
  end

  test "should update transaction_type" do
    patch transaction_type_url(@transaction_type), params: { transaction_type: { name: @transaction_type.name, slug: @transaction_type.slug } }, as: :json
    assert_response 200
  end

  test "should destroy transaction_type" do
    assert_difference('TransactionType.count', -1) do
      delete transaction_type_url(@transaction_type), as: :json
    end

    assert_response 204
  end
end
