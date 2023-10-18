const Router = require("express");
const apiRouter = new Router();
const apiController = require("../controllers/apiController");

apiRouter.get("/get-users", apiController.getUsers);

apiRouter.get("/get-user/:id", apiController.getUserById);

apiRouter.post("/update-user", apiController.updateUser);

module.exports = apiRouter;
