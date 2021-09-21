require 'test_helper'

class PassbooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @passbook = passbooks(:one)
  end

  test "should get index" do
    get passbooks_url, as: :json
    assert_response :success
  end

  test "should create passbook" do
    assert_difference('Passbook.count') do
      post passbooks_url, params: { passbook: { accounts_id: @passbook.accounts_id, balance: @passbook.balance, credit: @passbook.credit, debit: @passbook.debit, previous_balance: @passbook.previous_balance } }, as: :json
    end

    assert_response 201
  end

  test "should show passbook" do
    get passbook_url(@passbook), as: :json
    assert_response :success
  end

  test "should update passbook" do
    patch passbook_url(@passbook), params: { passbook: { accounts_id: @passbook.accounts_id, balance: @passbook.balance, credit: @passbook.credit, debit: @passbook.debit, previous_balance: @passbook.previous_balance } }, as: :json
    assert_response 200
  end

  test "should destroy passbook" do
    assert_difference('Passbook.count', -1) do
      delete passbook_url(@passbook), as: :json
    end

    assert_response 204
  end
end
