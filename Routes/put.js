const express=require("express")
const app=express()
const port=7890
app.use(express.json())

app.get('/',(req,res)=>
{
    res.send("Home Page 🪟")
})


const courses=[
    {id:1,name:"A"},
    {id:2,name:"B"},
    {id:3,name:"C"}
]
app.get("/about/:id",(req,res)=>
{
    res.send(req.params)
  console.log(req.params);
  //above line gives u the nested resource access
})

app.get("/courselist",(req,res)=>
{
    res.send(courses)
})


app.put("/Updatecourse/:cname",(req,res)=>
{
    //Cj=heck whether the course is present or not
    let course=courses.find((course)=>
    {
        return (course.name === req.params.cname)
    })
    if(!course) res.status(404).send("Not Found Error ~!!!")
    course.name=req.body.name
    res.send(courses)
})

app.listen(port,()=>
{
    console.log(`Srever running at http://localhost/${port}`);
})