const express=require("express")
const app=express()
const port=7890
app.use(express.json())

app.get('/',(req,res)=>
{
    res.send("Home Page 🪟")
})


//to perform delete operation we should declare array using let or var we should not use const
let courses=[
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


// app.delete("/Deletecourse/:cname",(req,res)=>
// {
//   //validation
//   const updated=courses.filter(course => course.name !== req.params.cname)
//   courses=updated

//   res.send("Hey U deleted 1 Entry")
// })

app.delete("/Deletecourse/:id",(req,res)=>
{
    let course=courses.find(course =>{ 
        return course.id === parseInt(req.params.id)})
    if(course)
    {  
        let index=courses.indexOf(course)
        courses.splice(index,1)
        res.send(courses)
    }
    else
      res.send("404 Error Occured")
})

app.listen(port,()=>
{
    console.log(`Srever running at http://localhost/${port}`);
})