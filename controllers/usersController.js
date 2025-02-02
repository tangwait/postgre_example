const db = require("../db/queries");

async function getUsernames(req, res) {
  const searchQuery = req.query.search || "";
  try {
    const usernames = await db.searchUsernames(searchQuery);
    res.render("index", {title: "User List", users: usernames });
  
} catch (error) {
  console.error("Error finding usernames", error);
  res.status(500).send("Internal Server Error");
  }
}

async function createUsernameGet(req, res) {
    res.render("createUser", { title: "Create Username" });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsernames(req, res) {
  const searchQuery = req.query.search || "";
  const usernames = await db.searchUsernames(searchQuery);

  res.render("index", { title: "Searched Users", users: usernames});
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernames
};
