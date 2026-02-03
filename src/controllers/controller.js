import { findUserByname, addUser, getuserWithEmail } from '../models/model.js';

import {generateToken} from '../middleWares/rateLimiter.js'
import bcrypt from 'bcrypt'


export const createuser = async (req, res) => {
  try {

    console.log('controller is called');
    console.log(req.body)

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
    const existinguser = await findUserByname(username);
    console.log(existinguser, 'no user')
    if (existinguser) {
      console.log('yhghvgvf')
      return res.status(409).json({ message: "User name alreeadytaken" })
    }
    if (existinguser == undefined) {
      const creatinguser = await addUser(username, email, password1);

      res.status(201).json({
        message: 'User registered successfully',
        user: { username, email }
      });
    }

    // TODO: call model here
    // addUser({ username, email, password });



  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }

};
export const loginUser = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body
    const getuser = await getuserWithEmail(email);
    const isMatch = await bcrypt.compare(password, getuser.password)
    if (isMatch && email == getuser.email) {
      // const createtoken=generateToken({
      //   id:getuser.id,
      //   email:getuser.email
      // })
      req.session.getuser={
        id:getuser.id,
        email:getuser.email 
      }
      console.log('SESSION CREATED:', req.session);
      return res.status(200).json({
        message: "user logges Successfully",token:req.session.id
      })
    }
    console.log(isMatch, 777)
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' })
  }

}