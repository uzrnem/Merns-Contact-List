#Create new user
mysql> CREATE USER 'uzrnem'@'localhost' IDENTIFIED BY 'password';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'uzrnem'@'localhost' WITH GRANT OPTION;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new-password';
mysql> FLUSH PRIVILEGES;
