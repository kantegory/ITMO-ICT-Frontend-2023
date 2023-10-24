const Router = require("express");
const apiRouter = new Router();
const apiController = require("../controllers/apiController");
const authMiddleware = require("../middleware/authMiddleware");

apiRouter.post("/get-users", authMiddleware, apiController.getUsers);

apiRouter.get("/get-user", authMiddleware, apiController.getUserById);

apiRouter.post("/update-user", authMiddleware, apiController.updateUser);

module.exports = apiRouter;
