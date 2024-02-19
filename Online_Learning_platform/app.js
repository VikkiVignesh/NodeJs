const express=require("express");
const route=require("./Routes/routings")
const joi=require("joi")

const mongo=require("mongoose")
//joi is used for validation
const port=7000;

//DB connection

const app=express();
app.use(express.json());

app.use(route)





app.listen(port,()=>
{
    console.log(`Sever Running in http:/localhost:${port}`);
})