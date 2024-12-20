const mysql = require("mysql");

exports.sqlConnection = function ({
  host = "localhost",
  user = "root",
  password = "",
  database,
}) {
  if (!database) throw new Error("Invalid database");

  const sqlConnection = mysql.createConnection({
    host,
    user,
    password,
    database,
  });

  return new Promise((resolve, reject) => {
    sqlConnection.connect((err) => {
      if (err) {
        console.error("Error connecting to the database:", err);
        reject(err);
      } else {
        console.log("Connected to the database");
        resolve(sqlConnection);
      }
    });
  });
};

// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "first_connection_with_node",
// });
