const usersController = require("../controllers/users.controller");

module.exports = (app) => {
  app.post("/api/register", usersController.register);
  app.post("/api/login", usersController.login);
};
