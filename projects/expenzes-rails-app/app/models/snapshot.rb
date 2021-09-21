class Snapshot < ApplicationRecord
  def click()
    account_type = AccountType.where(:slug => 'saving')
    self.saving = Account.where(:account_type => account_type, :is_snapshot_disable => 0).sum(:amount)
    account_type = AccountType.where(:slug => 'credit')
    self.credit = Account.where(:account_type => account_type, :is_snapshot_disable => 0).sum(:amount)
    account_type = AccountType.where(:slug => 'loan')
    self.loan = Account.where(:account_type => account_type, :is_snapshot_disable => 0).sum(:amount)
    account_type = AccountType.where(:slug => 'invest')
    self.invest = Account.where(:account_type => account_type, :is_snapshot_disable => 0).sum(:amount)
    account_type = AccountType.where(:slug => 'deposit')
    self.deposit = Account.where(:account_type => account_type, :is_snapshot_disable => 0).sum(:amount)
    account_type = AccountType.where(:slug => 'donate')
    self.donate = Account.where(:account_type => account_type, :is_snapshot_disable => 0).sum(:amount)
    account_type = AccountType.where(:slug => 'wallet')
    self.wallet = Account.where(:account_type => account_type, :is_snapshot_disable => 0).sum(:amount)
    self.event_date = DateTime.current.to_date
    return self.save()
  end
end
