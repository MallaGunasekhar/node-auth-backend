import express from 'express';

import {createuser,loginUser} from '../controllers/controller.js'


import {signupRateLimiter} from '../middleWares/rateLimiter.js'

const router=express.Router();

console.log('user routes loaded')


router.post('/register',signupRateLimiter,createuser);

router.post('/login',signupRateLimiter,loginUser);

export default router