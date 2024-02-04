//Express js
const express=require('express');
const port=5006;

const app=express();

app.get("/",function (req,res) {
    res.send("Hey well done 🤝🤝")
})

app.listen(port,()=>
{
    console.log(`Server running at http://localhost:${port}`);
})

