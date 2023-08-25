const redis = require("redis");
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});
client.connect();
client.on("connect", () => {
  console.log("connect to redis");
});

client.on("error", (err) => {
  console.error("Error:", err);
});

module.exports = client;
