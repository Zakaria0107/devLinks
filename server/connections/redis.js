const Redis = require("redis")
const redisClient = Redis.createClient({
  url: process.env.REDIS
})


const connectRedis = async () => {
  await redisClient.connect();
  redisClient.on('error', (err) => {
    console.error('Redis error:', err);
  });
}
module.exports = { connectRedis , redisClient };
