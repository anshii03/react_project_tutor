const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.listen("5000", () => {
  console.log("server is running on port 5000 ");
});

mongoose.connect(
  "mongodb+srv://algotutor:mongodb123@cluster0.4zp4eou.mongodb.net/"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("connection was not successful");
});

db.on("open", () => {
  console.log("connection is successful");
});

require("./Routes/restaurant.routes")(app);

// app.get("/", (req, res) => {
//   res.send("Learning NodeJS");
// });

// app.get("/api", (req, res) => {
//   res.send("welcome");
// });

// // CRUD Operations

// const users = [
//   {
//     id: 1,
//     name: "anshika",
//     age: "23",
//   },
//   {
//     id: 2,
//     name: "ankit",
//     age: "22",
//   },
//   {
//     id: 3,
//     name: "gokul",
//     age: "13",
//   },
//   {
//     id: 4,
//     name: "hari",
//     age: "21",
//   },
//   {
//     id: 5,
//     name: "akash",
//     age: "27",
//   },
// ];

// // Create a new user ----  POST
// // Get all users ---------  GET
// // Update any user ------  PUT
// // Delete any user ------  DELETE

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// // Get a particular user with one particular id

// app.get("/user/:id", (req, res) => {
//   const id = req.params.id;

//   console.log("id", id);

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "user does not exist" });
//   }

//   res.json(user);
// });

// // create a new user

// app.post("/user", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;

//   const user = {
//     id: Math.random() * 20,
//     name: name,
//     age: age,
//   };

//   users.push(user);

//   res.send(users);
// });

// // Update a user by id

// app.put("/user/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "user does not exist" });
//   }

//   //req.body ===> json object

//   const keys = Object.keys(req.body);

//   keys.forEach((key) => {
//     if (!user[key]) {
//       res.status(404).json({ message: "Invalid key" });
//     }

//     user[key] = req.body[key];
//   });

//   res.json(users);
// });

// // delete a user by particular id

// app.delete("/user/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "user does not exist" });
//   }

//   const filteredUsers = users.filter((user) => user.id != id);

//   res.json(filteredUsers);
// });
