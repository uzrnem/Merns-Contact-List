select *
from (
SELECT act.id, sum(act.amount) as amount, act.event_date, 
         IF(GROUPING(act.remarks), 'Total', act.remarks) AS remarks, act.created_at, act.updated_at,
             fa.name as from_account, ta.name as to_account, tags.name as tag,
             transaction_types.name as transaction_type, fp.previous_balance as fp_previous_balance,
             fp.balance as fp_balance, tp.previous_balance as tp_previous_balance, tp.balance as tp_balance
        FROM `activities` as act
        LEFT JOIN `tags` ON `tags`.`id` = `act`.`tag_id`
        LEFT JOIN `transaction_types` ON `transaction_types`.`id` = `act`.`transaction_type_id`
        LEFT JOIN `passbooks`as fp ON `fp`.`activity_id` = `act`.`id` and act.from_account_id = fp.account_id
        LEFT JOIN `passbooks`as tp ON `tp`.`activity_id` = `act`.`id` and act.to_account_id = tp.account_id
        LEFT JOIN accounts as fa ON fa.id = act.from_account_id
        LEFT JOIN accounts as ta ON ta.id = act.to_account_id
        ORDER BY `act`.`event_date` DESC, `act`.`id` DESC LIMIT 10 offset 0

        GROUP BY `act`.`id` , act.event_date, act.remarks, act.created_at, act.updated_at, fa.name, ta.name, tags.name,
          transaction_types.name, fp.previous_balance, fp.balance, tp.previous_balance, tp.balance WITH ROLLUP









----------------hssarrsgl

 
select
 CASE WHEN type is null THEN total ELSE type END account_type,
 CASE WHEN account_name is null THEN CONCAT(total, " ", type) ELSE account_name END account_name, balance
from
(
select
 CASE WHEN is_snapshot_disable is false THEN "Bhagyesh Total" WHEN is_snapshot_disable is true THEN "Shweta Total" ELSE "Total" END total,
 is_snapshot_disable, t.name as type, a.name as account_name, sum(a.amount) as balance
from accounts a
left join account_types t on t.id = a.account_type_id
group by is_snapshot_disable, t.name, a.name with rollup
order by
 is_snapshot_disable asc, (t.name = 'Saving') desc, (t.name = 'Credit') desc, 
 (t.name = 'Wallet') desc, (t.name = 'Deposit') desc, (t.name = 'Loan') desc,
 (t.name = 'Invest') desc, (t.name = 'Donate') desc, t.name desc, a.name desc
) account;






select
  IF(GROUPING(act.name), 'Total', act.name) AS NAME,
  sum(a.AMOUNT) as Credit_Expense
FROM activities a
JOIN tags t ON t.ID = a.tag_id
JOIN accounts act on act.id = a.to_account_id
WHERE t.ID = 4
group by act.name with rollup
