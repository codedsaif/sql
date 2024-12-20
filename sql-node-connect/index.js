const express = require("express");
const { sqlConnection } = require("./db/connections");
const userRoutes = require("./routes/userRoutes");
const path = require("path");

const server = express();

server.use(express.json());

const port = 8080;

const start = async () => {
  try {
    const connection = await sqlConnection({
      database: "first_connection_with_node",
    });

    // Middleware to attach the connection to the request object
    server.use((req, res, next) => {
      req.db = connection;
      next();
    });

    // Serve static files (views)
    server.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "index.html"));
    });

    // Use the user routes
    server.use("/api/v1", userRoutes);

    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with an error code
  }
};

start();
