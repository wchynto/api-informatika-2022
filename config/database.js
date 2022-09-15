const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(
  process.env.MONGO_URL,
);

const db = mongoose.connection;
db.on("error", () => {
  console.log("Gagal terhubung ke database");
});

db.once("connected", () => {
  console.log("Berhasil terhubung ke database");
});
