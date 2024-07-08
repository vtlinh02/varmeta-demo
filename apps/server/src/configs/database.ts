const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

const connect = async () => {
  mongoose
    .connect(MONGODB_URL)
    .catch((error) => {
      console.log("🚀 Connect database failed");
    });
  return mongoose.connection;
}

export { connect }