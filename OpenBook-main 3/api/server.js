const express= require('express');
const app=express();
const regrouter=require('./Routers/regrouter')
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/openbook')



app.use(express.json())
app.use(regrouter)
app.use(express.static('public'))
app.listen(5000,()=>{console.log("server is running on port 5000")})