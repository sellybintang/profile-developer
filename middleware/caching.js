const client = require("../config/caching");

exports.cacheRadis = async (req, res, next) => {
  const mykey = "Hello, Redis!";
  console.log(mykey);
  const cacheData = await client.get(mykey);

  if (cacheData == null) {
    next();
  } else {
    console.log("All data developer from cache");
    res.send(JSON.parse(cacheData));
  }
};
