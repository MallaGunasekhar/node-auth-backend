
import express from 'express'
import cors from 'cors';
import routes from './routes/route.js'
import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config()

// const multer = require('multer');

// import fs from 'fs'

const PORT = process.env.PORT || 3000;
const app=express();
app.use(cors())
app.use(express.json());

app.use('/users',routes)



app.listen(PORT,()=>{
    console.log('server starts listening on port 3000')
})


async function test() {
  try {
    const res = await fetch('http://localhost:3000/health');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
// Root-level health for testing
app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});
test();
