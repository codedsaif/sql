const userModel = require("../models/userModel");

module.exports = {
  registerUser: (req, res) => {
    const connection = req.db;
    const user = req.body;

    userModel.createUser(connection, user, (err, results) => {
      if (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Database error" });
      } else {
        res.status(201).json({
          id: results.insertId,
          username: user.username,
          email: user.email,
        });
      }
    });
  },

  getUsers: (req, res) => {
    const connection = req.db;

    userModel.getUsers(connection, (err, results) => {
      if (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Database error" });
      } else {
        res.status(200).json(results);
      }
    });
  },
};
