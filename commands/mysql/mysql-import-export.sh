
#Backup and Restore DB
restore $ mysql -u root -p broking < ~/projects/broking.sql
backup  $ mysqldump -u root -p broking > ~/projects/broking.sql
