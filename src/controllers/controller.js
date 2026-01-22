import { findUserByname,addUser } from '../models/model.js';
import bcrypt from 'bcrypt'


export const createuser = async (req, res) => {
  try {

    console.log('controller is called');

    // ✅ Read data from frontend
    const { username, email, password, confirmPassword } = req.body;

    console.log('Request body:', res.status);

    if (!password || !confirmPassword || !username || !email) {
      return res.status(400).json({ message: 'Missing fileds' })
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" })
    }

    const password1 = await bcrypt.hash(password, 10);

    console.log(password1);
    const existinguser=await findUserByname(username);
    console.log(existinguser,'no user')
    if (existinguser){
      console.log('yhghvgvf')
      return res.status(409).json({message:"User name alreeadytaken"})
    }

    // TODO: call model here
    // addUser({ username, email, password });

    res.status(201).json({
      message: 'User registered successfully',
      user: { username, email }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }

};
