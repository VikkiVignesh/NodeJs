const express=require("express")
const app=express();
const port=6700

app.get('/',(req,res)=>
{
    res.send("Hello world!,This my first express app");
})