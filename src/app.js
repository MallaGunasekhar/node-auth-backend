
import express from 'express'
import cors from 'cors';
import routes from './routes/route.js'


// const multer = require('multer');

import fs from 'fs'


const app=express();
app.use(cors())
app.use(express.json());

app.use('/users',routes)



app.listen(3000,()=>{
    console.log('server starts listening on port 3000')
})