SELECT
 transaction_types.name as transaction_type, tag.name as tag, sub.name as sub_tag, group_concat(DISTINCT(act.remarks)), SUM(act.amount)
FROM `activities` as act
LEFT JOIN `tags` tag ON `tag`.`id` = `act`.`tag_id`
LEFT JOIN `tags` sub ON `sub`.`id` = `act`.`sub_tag_id`
LEFT JOIN `transaction_types` ON `transaction_types`.`id` = `act`.`transaction_type_id`
WHERE event_date > '2021-05-31' AND event_date > '2021-06-01' AND `act`.`transaction_type_id` != 1
GROUP BY `act`.`transaction_type_id`, tag.name, sub.name
ORDER BY `act`.`transaction_type_id` ASC, tag.name ASC, sub.name ASC LIMIT 1000


UPDATE `activities` SET tag_id = 61, sub_tag_id = 22 where tag_id = 22

SELECT * FROM `activities` WHERE event_date > '2021-05-31' AND `transaction_type_id` = 3

SELECT COALESCE(sub.name, tag.name) as tag, SUM(act.amount) as amount
FROM `activities` as act
LEFT JOIN `tags` tag ON `tag`.`id` = `act`.`tag_id`
LEFT JOIN `tags` sub ON `sub`.`id` = `act`.`sub_tag_id`
WHERE month(event_date) = 6 AND year(event_date) = 2021 AND `act`.`transaction_type_id` = 2
GROUP BY tag.name, sub.name


SELECT tag.name, sub.name, act.tag_id, act.sub_tag_id, GROUP_CONCAT(remarks)
FROM `activities` as act
    LEFT JOIN `tags` tag ON `tag`.`id` = `act`.`tag_id`
    LEFT JOIN `tags` sub ON `sub`.`id` = `act`.`sub_tag_id`
    WHERE sub_tag_id is not null and `act`.`transaction_type_id` = 2
    GROUP BY tag.name, sub.name, act.tag_id, act.sub_tag_id


    --
    SELECT `id`, `tag_id`, `sub_tag_id`, `amount`, `remarks` FROM `activities` where transaction_type_id = 2 and sub_tag_id is null order by tag_id limit 500-- lower(remarks) = 'milk' --   and tag_id = 9

    -- update activities set `tag_id` = 10, `sub_tag_id` = 2 where transaction_type_id = 2 and sub_tag_id is null and tag_id = 2
