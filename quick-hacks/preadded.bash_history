cd $HOME/projects/docker/mysql_db
ssh-keygen -t ed25519 -C "bhagyeshsunilpatel@gmail.com"
echo "# docker-compose-files" >> README.md
firebase serve
python3 -m http.server 9050

#Docker
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(. /etc/os-release; echo "$UBUNTU_CODENAME") stable"
sudo apt-get update
sudo apt-get -y install docker-ce
newgrp docker
sudo groupadd docker
sudo usermod -aG docker $USER
docker ps -a
docker --version
sudo apt -y install docker-compose
sudo apt-get -y install docker-ce
sudo usermod -aG docker $USER
newgrp docker
docker ps -a
sudo chmod +x /usr/local/bin/docker-compose
sudo mkdir /usr/local/bin/docker-compose
docker-compose --version
sudo apt install docker-compose

docker-compose -f mysql-phpmyadmin.yml up


#Node
sudo apt-get install curl python-software-properties software-properties-common 
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
sudo apt-get install nodejs 
node -v
npm -v

#Git
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:uzrnem/docker-compose-files.git
git push -u origin main
git gui
git remote -v

sudo apt-get install git-gui
git config --global user.email "bhagyeshsunilpatel@gmail.com"
git config --global user.name "uzrnem"


#Mysql
mysql -u root -p broking < ~/projects/docker/mysql_db/sql_files/broking.sql
mysql -u root -p expense < ~/projects/docker/mysql_db/sql_files/expense.sql
mysqldump -u root -p broking > ~/projects/broking.sql
mysqldump -u root -p expense > ~/projects/expense.sql


#System commands
systemctl is-enabled mysql
systemctl is-active mysql
sudo service mysql status
sudo service mysql stop
sudo systemctl disable mysql

#Remove MySQL
cd /var/lib/mysql
sudo su
sudo apt-get remove --purge mysql-server mysql-client mysql-common mysql-server-core-* mysql-client-core-*
sudo rm -rf /etc/mysql /var/lib/mysql
sudo apt autoremove
sudo apt-get update

#Docker Commands
docker build . -t uzrnem
docker images
docker rmi 6c0db4beaf52
docker ps -a
docker start uzrnem
docker rm confident_kare
docker run -p 8082:8080 -d uzrnem
docker logs thirsty_zhukovsky
docker exec -it thirsty_zhukovsky bash
docker stop thirsty_zhukovsky
docker run -p 8000:8000 --name rest-server uzrnem

docker-compose up
docker build . -t expense:1.0.0 -t expense:latest

sudo dpkg -i code_1.62.3-1637137107_amd64.deb 

sudo /bin/bash canon_lbp_setup.sh

