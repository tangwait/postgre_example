const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.render("index", {title: "User List", users: usernames });
}

async function createUsernameGet(req, res) {
    res.render("createUser", { title: "Create Username" });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};
