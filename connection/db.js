const mongoose = require("mongoose");

let DB_URI = process.env.MONGO_URI;
mongoose
  .connect(DB_URI)
  .then(() => console.log("connection successful"))
  .catch((error) => {
    console.log(error.message);
  });
