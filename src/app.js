
import express from 'express'
import cors from 'cors';
import routes from './routes/route.js'
import dotenv from 'dotenv'
dotenv.config()

// const multer = require('multer');

import fs from 'fs'

const PORT = process.env.PORT || 3000;
const app=express();
app.use(cors())
app.use(express.json());

app.use('/users',routes)



app.listen(PORT,()=>{
    console.log('server starts listening on port 3000')
})