const express=require("express")
const app=express();
const port=6700

app.get('/',(req,res)=>
{
    res.send("Hello world!,This my first express app");
})

app.listen(port,()=>{
    console.log(`Server Running in http//localhost:${port}`);
})