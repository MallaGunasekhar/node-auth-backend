
import mysql from 'mysql2/promise'

import dotenv from 'dotenv'
dotenv.config()

const db=mysql.createPool({
    host:'localhost',
    user:"root",
    password:"",
    database:process.env.DB_NAME,
    connectionLimit:10,
    queueLimit:50

});

console.log(db.execute)

// setInterval(() => {
//   console.log("📊 POOL STATUS");
//   console.log("Total connections:", db._allConnections.length);
//   console.log("Free connections:", db._freeConnections.length);
//   console.log("Waiting requests:", db._connectionQueue.length);
//   console.log("----------------------------");
// }, 5000);
export default db
