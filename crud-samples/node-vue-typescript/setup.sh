echo Let\'s initiate installation process...
read -p "Enter Databse name : " dbname
read -p "Enter Host name : " hostname
read -p "Enter Port Number : " portno

echo "export default {"  >> 'server/env.ts'
echo "	DATABASE : '$dbname',"  >> 'server/env.ts'
echo "	HOST: '$hostname',"  >> 'server/env.ts'
echo "	PORT: '$portno'"  >> 'server/env.ts'
echo "};"  >> 'server/env.ts'
echo "Setup is completed..!"

#read varname
#	USER_NAME : "root",
#	PASSWORD : "toor",
