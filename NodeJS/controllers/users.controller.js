const usersModel = require("../model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { fullName, email, password } = req.body;

  const newUser = new usersModel({
    fullName,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  usersModel
    .findOne({ email })
    .then((data) => {
      if (data) {
        return res.status(400).send({ message: "User already registered" });
      } else {
        newUser.save().then((data) => {
          res.status(200).send({ message: "User registered successfully" });
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while registering",
      });
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  usersModel
    .findOne({ email })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "User is not registered" });
      }

      let isValidPassword = bcrypt.compareSync(password, data.password);

      if (!isValidPassword) {
        res.status(401).send({ message: "Invalid Password" });
      }

      let token = jwt.sign({ id: data._id }, "secretKey");
      res.send({
        user: {
          id: data._id,
          email: data.email,
          password: data.password,
        },
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not running" });
    });
};
