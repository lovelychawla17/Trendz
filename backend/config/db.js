const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,            // from Render env
  user: process.env.DB_USER,            // from Render env
  password: process.env.DB_PASSWORD,    // from Render env
  database: process.env.DB_NAME,        // from Render env
  port: Number(process.env.DB_PORT),    // from Render env
  ssl: { rejectUnauthorized: false }    // required for Railway external connection
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed");
    console.error(err.code, err.message);
  } else {
    console.log("✅ MySQL connected");
  }
});

module.exports = db;
