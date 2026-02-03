import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

let db;

if (process.env.RAILWAY_ENVIRONMENT) {
  // 🚀 Running on Railway
  db = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
  });
} else {
  // 💻 Running locally
  db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'auth_db',
    port: 3306,
  });
}

db.getConnection()
  .then(conn => {
    console.log('✅ DB connected');
    conn.release();
  })
  .catch(err => console.error('❌ DB error:', err.message));
async function testDB() {
  try {
    const [rows] = await db.query("DESCRIBE users");
    console.log(rows);
  } catch (err) {
    console.error("DB test failed:", err.message);
  }
}

// testDB();


export default db;
