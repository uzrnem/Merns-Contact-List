$ sudo apt update
$ sudo apt install mysql-server
$ mysql --version
mysql  Ver 8.0.26-0ubuntu0.20.04.2 for Linux on x86_64 ((Ubuntu))
$ sudo mysql_secure_installation

# If you face issue here
$ mysql -u root -p
Enter password: 
#ERROR 1698 (28000): Access denied for user 'root'@'localhost'

$ sudo mysql
Welcome to the MySQL monitor.
Server version: 8.0.26-0ubuntu0.20.04.2 (Ubuntu)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sb';
Query OK, 0 rows affected (0.00 sec)

mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.01 sec)

mysql> exit
Bye

$ mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.
Server version: 8.0.26-0ubuntu0.20.04.2 (Ubuntu)


#Backup and Restore DB
restore $ mysql -u root -p broking < ~/projects//broking.sql
backup  $ mysqldump -u root -p broking > ~/projects/broking.sql

