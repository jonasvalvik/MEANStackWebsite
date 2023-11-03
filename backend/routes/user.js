const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

//Here we want to create a new user and store it in the database.
//We create password using a hash and then add a new user.
router.post("/signup", UserController.createUser);

//First, check if the email adress exists
//If user exists, check if the hashed password entered matches the one stored in the database
router.post("/login", UserController.userLogin);

module.exports = router;
