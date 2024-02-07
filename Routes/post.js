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

app.get("/courselist/:id",(req,res)=>
{
    let course=courses.find((course)=>
    {
        return course.id === parseInt(req.params.id)
    })

    if(!course)
     res.status(404).send("Course Does not Exists")
    res.send(course)
})

app.post("/Addcourse",(req,res)=>
{
    const core={
        id:courses.length+1,
        name:req.body.name //accepting input from the body
    }
    courses.push(core)
    res.send(courses)
})

app.listen(port,()=>
{
    console.log(`Srever running at http://localhost/${port}`);
})