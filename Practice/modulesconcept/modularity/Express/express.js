const express=require("express")

const app=express()

app.get("/",(req,res)=>
{
    res.send("Ho");
}
)

app.listen(7009,()=>
{
    console.log("http://localhost:7009");
}
)
