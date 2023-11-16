const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  avgRating: String,
  cloudinaryImageID: String,
  cuisines: Array,
  costForTwo: Number,
  menuItems: Array,
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

module.exports = RestaurantModel;
