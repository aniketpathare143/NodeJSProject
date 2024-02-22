const ioredis = require('ioredis');
const redis = new ioredis();

redis.on('connect', () => {
    console.log('connected to redis successfully!')
})

redis.on('error', (error) => {
    console.log('Redis connection error :', error)
})

redis.set("Passion", "IT Engineer");
redis.get("Passion", (err, res) => {
    if(err){}
    console.log(res);
})

console.log();