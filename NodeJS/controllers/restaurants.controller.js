const restaurantModel = require("../model/restaurants.model");

exports.create = (req, res) => {
  const {
    name,
    city,
    area,
    avgRating,
    clodinaryImageId,
    cuisines,
    costForTwo,
    costForTwoString,
    deliveryTime,
  } = req.body;

  // Creating a new row
  const newRestaurant = new restaurantModel({
    name,
    city,
    area,
    avgRating,
    clodinaryImageId,
    cuisines,
    costForTwo,
    costForTwoString,
    deliveryTime,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};

exports.fetch = (req, res) => {
  restaurantModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};

exports.updateOne = (req, res) => {
  const _id = req.params.id;
  restaurantModel
    .findByIdAndUpdate(_id, { avgRating: "4.0" })
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "Bad Request" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};

exports.delete = (req, res) => {
  const _id = req.params.id;

  restaurantModel
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Restaurant Not found" });
      }
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};
