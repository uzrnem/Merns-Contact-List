echo Let\'s initiate installation process...
read -p "Enter Databse name : " dbname
read -p "Enter Host name : " hostname
read -p "Enter Port Number : " portno
read -p "Enter Secret Jwt Key : " jwtkey
read -p "Enter Exp Time : " exptime

echo "module.exports = {"  >> 'env.js'
echo "	DATABASE : '$dbname',"  >> 'env.js'
echo "	HOST: '$hostname',"  >> 'env.js'
echo "	PORT: '$portno',"  >> 'env.js'
echo "	SECRET_JWT_KEY: '$jwtkey',"  >> 'env.js'
echo "	TOKEN_EXPIRATION_TIME: $exptime"  >> 'env.js'
echo "};"  >> 'env.js'
echo "Setup is completed..!"

#read varname
#	USER_NAME : "root",
#	PASSWORD : "toor",
