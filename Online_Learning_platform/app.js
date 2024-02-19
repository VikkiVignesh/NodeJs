const express=require("express");
const route=require("./Routes/routings")
const mongo=require("mongoose");
const std=require("./Routes/Students")


const { default: mongoose } = require("mongoose");
//joi is used for validation
const port=7000;

//DB connection
async function connectDB() {
    try {
        mongo.connect("mongodb://127.0.0.1/OnlinePlatform")
        console.log("DataBase Connection Sucessfully");
        
    } catch (error) {
        console.log(error);
    }
}
connectDB()

const app=express();
app.use(express.json());

app.use(route)
app.use("/api/students",std)





app.listen(port,()=>
{
    console.log(`Sever Running in http:/localhost:${port}`);
})