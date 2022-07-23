require("dotenv").config();

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.MYSQL_KEY,
  DB: process.env.MYSQL_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
