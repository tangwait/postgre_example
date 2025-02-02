const pool = require("./pool");

async function getAllUsers() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsernames(searchQuery) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE $1",
    [`%${searchQuery}%`]
    );
    return rows;
}

module.exports = {
  searchUsernames,
  getAllUsers,
  getAllUsernames,
  insertUsername
};
