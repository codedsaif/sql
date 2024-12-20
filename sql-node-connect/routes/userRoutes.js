// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register", userController.registerUser);
router.get("/users", userController.getUsers);

module.exports = router;
