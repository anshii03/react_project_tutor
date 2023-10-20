const usersController = require("../controllers/users.controller");

module.exports = (app) => {
  app.post("/api/register", usersController.register);
  app.get("/api/login", usersController.login);
};
