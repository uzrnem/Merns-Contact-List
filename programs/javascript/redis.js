//"dependencies": { "redis": "^3.0.2" }
const redis = require("redis");
const client = redis.createClient("redis://localhost:6379");

client.get('name', (error, value) => {
 console.log(value)
})
