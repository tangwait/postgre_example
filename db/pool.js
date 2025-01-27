const { Pool } = require("pg");
require("dotenv").config({ path: "db.env" }); 

module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
