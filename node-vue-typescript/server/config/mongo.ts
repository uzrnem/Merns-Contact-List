import env from '../env'

// const mongoURI = `mongodb://${USER_NAME}:${PASSWORD}@localhost:${PORT}/${DATABASE}`
const mongoURI = `mongodb://${env.HOST}:${env.PORT}/${env.DATABASE}`;

export default mongoURI
