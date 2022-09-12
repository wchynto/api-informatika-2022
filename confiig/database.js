const Sequelize = require("sequelize").Sequelize;

const db = new Sequelize("informatika_2022", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

const checkConnection = async () => {
  try {
    await db.authenticate();
    console.log("Success connect database");
  } catch (error) {
    console.log(error);
  }
};

checkConnection();

module.exports = db;
