// models/userModel.js
module.exports = {
  createUser: (connection, user, callback) => {
    const { username, email, password } = user;
    const query =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    connection.query(query, [username, email, password], callback);
  },

  getUsers: (connection, callback) => {
    const query = "SELECT * FROM users";
    connection.query(query, callback);
  },
};
