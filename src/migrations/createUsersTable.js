import pool from "../config/db.js";

const createUsersTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(sql);
    console.log("✅ users table created");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating table", err);
    process.exit(1);
  }
};

createUsersTable();
const [rows] = await db.query("DESCRIBE users");
console.log(rows);
