require "#{Rails.root}/helper/my_helper.rb"

csv = getCsvData('transaction_type.csv')
csv.each do |row|
	TransactionType.find_or_create_by!(row.to_hash.with_indifferent_access)
end
puts "TransactionType are Added!"


csv = getCsvData('account_type.csv')
csv.each do |row|
	AccountType.find_or_create_by!(row.to_hash.with_indifferent_access)
end
puts "AccountType are Added!"
