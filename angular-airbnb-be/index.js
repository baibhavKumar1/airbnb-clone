const express = require('express');
const cors= require('cors');
const connection = require('./db');
const app= express();

app.use(express.json());
app.use(cors());

app.listen(3000,async()=>{
    try{
        await connection;
    console.log('connected')
    }
    catch(err){
        console.log(err.message)
    }
    console.log('running on 3000')
})