//Express js
const express=require('express');
const port=5006;

const app=express();
const Schools=[{id:1,name:'school1'},
{id:2,name:'school2'},
{id:3,name:'school3'},]

app.get("/",function (req,res) {
    res.send("Hey well done 🤝🤝")
})

app.get('/html',(req,res)=>
{
    res.send('<h3>This Html test</h3>')
})

app.get('/Schools',(req,res)=>
{
    res.json(Schools)
})

app.listen(port,()=>
{
    console.log(`Server running at http://localhost:${port}`);
})

