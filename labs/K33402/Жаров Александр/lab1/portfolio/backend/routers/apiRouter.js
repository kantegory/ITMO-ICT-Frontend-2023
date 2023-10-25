const Router = require("express");
const apiRouter = new Router();
const apiController = require("../controllers/apiController");
const authMiddleware = require("../middleware/authMiddleware");

apiRouter.post("/get-users", authMiddleware, apiController.getUsers);

apiRouter.get("/get-user", authMiddleware, apiController.getUser);

apiRouter.post("/update-user", authMiddleware, apiController.updateUser);

apiRouter.post("/get-user-by-id", authMiddleware, apiController.getUserById);

module.exports = apiRouter;
