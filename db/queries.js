const pool = require("./pool");

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

async function deleteUsername(username) {
  const { rowCount } = await pool.query(
    "DELETE FROM usernames WHERE username = $1",
    [username]
  );

  return rowCount ? `Deleted ${username}` : `User not found`;
};

module.exports = {
  searchUsernames,
  getAllUsernames,
  insertUsername,
  deleteUsername
};
