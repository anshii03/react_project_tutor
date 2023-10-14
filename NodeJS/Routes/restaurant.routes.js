const restaurantController = require("../controllers/restaurants.controller");

module.exports = (app) => {
  app.post("/api/restaurant", restaurantController.create);
  app.get("/api/restaurants", restaurantController.fetch);
  app.put("/api/restaurant/:id", restaurantController.updateOne);
  app.delete("/api/restaurant/:id", restaurantController.delete);
};
