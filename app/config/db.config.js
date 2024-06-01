require('dotenv').config();

const { DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  HOST: "localhost",
  USER: DB_USER,
  PASSWORD: DB_PASS,
  DB: DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

