
import db from '../config/db.js';
console.log('model is called');



export const findUserByname=async (username)=>{
  console.log(username)

  const selectQuery="SELECT * FROM users WHERE name=?"

  const [rows]=await db.execute(selectQuery,[username])

  console.log(rows,'55')
  return rows[0]
}

export const addUser=async (username,email,password)=>{
    console.log(username,email,password,'in modelll');

    const insertQuery="INSERT INTO users (name,email,password) VALUES (?,?,?)";

    const rows=await db.execute(insertQuery,[username,email,password])
     console.log(rows)
    return rows

   
}
export const getuserWithEmail=async (email)=>{
  const selectQuery="SELECT * FROM users WHERE email=?";
  const [rows]=await db.execute(selectQuery,[email])

  return rows[0]
}