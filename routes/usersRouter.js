const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.getUsernames);
usersRouter.get("/createUser", usersController.createUsernameGet);
usersRouter.post("/createUser", usersController.createUsernamePost);

usersRouter.get("/", usersController.searchUsernames);

usersRouter.post("/delete", usersController.deleteUsername);

module.exports = usersRouter;
