
let { HOST, PORT, DATABASE } = {
	DATABASE : 'expensez',
	HOST: 'localhost',
	PORT: '27017'
}

// const mongoURI = `mongodb://${USER_NAME}:${PASSWORD}@localhost:${PORT}/${DATABASE}`
const mongoURI = `mongodb://${HOST}:${PORT}/${DATABASE}`;

export default mongoURI
