const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  area: String,
  avgRating: String,
  cloudinaryImageId: String,
  cuisines: Array,
  costForTwo: Number,
  costForTwoString: String,
  deliveryTime: Number,
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

module.exports = RestaurantModel;
