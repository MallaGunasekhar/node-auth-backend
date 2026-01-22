import express from 'express';

import {createuser} from '../controllers/controller.js'


import {signupRateLimiter} from '../middleWares/rateLimiter.js'

const router=express.Router();

console.log('user routes loaded')


router.post('/register',signupRateLimiter,createuser);



export default router