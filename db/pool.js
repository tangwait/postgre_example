const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: "tangwai",
  database: "top_users",
  password: "tangwai-examples",
  port: 5432 
});
