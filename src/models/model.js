
import db from '../config/db.js';
console.log('model is called');



export const findUserByname=async (username)=>{
  console.log(username)

  const selectQuery="SELECT * FROM users WHERE name=?"

  const [rows]=await db.execute(selectQuery,[username])

  console.log(rows,'55')
  return rows[0]
}

export const addUser=()=>{

}
