require "#{Rails.root}/helper/my_helper.rb"

csv = getCsvData('tag.csv')
csv.each do |row|
  data = row.to_hash.with_indifferent_access
  model = TransactionType.find_by(slug: data['transaction_type'])
	Tag.find_or_create_by!(name: data['name'], slug: data['slug'], transaction_type: model)
end
puts "Tag are Added!"


csv = getCsvData('account.csv')
csv.each do |row|
  data = row.to_hash.with_indifferent_access
  model = AccountType.find_by(slug: data['type'])
  account = Account.create_with(amount: data['amount'], account_type: model)
  .find_or_create_by!(name: data['name'], slug: data['slug'])
  account.is_frequent = data['is_frequent']
  account.is_snapshot_disable = data['is_snapshot_disable']
  account.save
end
puts "Accounts are Added!"
