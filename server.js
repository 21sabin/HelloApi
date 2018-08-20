const express=require('express');
const bodyParser=require("body-parser");
var app=express();

app.get("/",(req,res)=>{
    res.json({  message:"Hello from nodejs."  })
})
const PORT=2000;

app.listen(PORT,()=>{console.log(`server started at ${PORT}`)})
