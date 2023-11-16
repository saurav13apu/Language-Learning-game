import mysql from "mysql2";

const pool = mysql.createPool({
  host: "sql12.freesqldatabase.com",
  port: "3306",
  user: "sql12662311",
  password: "x6dU5GGfhQ",
  database: "sql12662311",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database!");

    connection.on("error", function (err) {
      console.error(new Date(), "MySQL error", err.code);
    });
    connection.on("close", function (err) {
      console.error(new Date(), "MySQL close", err);
    });

    // Release the connection back to the pool when done with it
    connection.release();
  }
});

pool.on("connection", function (connection) {
  console.log("DB Connection established");
});

export default pool.promise();
