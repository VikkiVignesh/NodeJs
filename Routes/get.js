//Routing is very important in the server side development its plays a vitole role in fetching details in the website
//like if the website has more features ,if user selects on the any one features its should route to particular  webpage

const express=require('express')
const app=express();

const port=3000;


//adding middleware to the server for connecting one http call to other http call
app.use(express.json());//middleware reads data in JSON formate
//get method

app.get("/",(req,res)=>
{
    res.send("Root Page")
})

app.get("/about",(req,res)=>
{
    res.send("About page")
})

app.get("/contact",(req,res)=>
{
    res.send("Contact page")
})

app.get("/msg",(req,res)=>
{
    res.send("Msg page")
})

//routing parameters
app.get("/about/:id",(req,res)=>
{
    res.send(req.params)
  console.log(req.params);
  //above line gives u the nested resource access
})

//Handling multiple routes
const rout=[
    {id:1,name:'JavaScript'},
    {id:2,name:'Java'},
    {id:3,name:'C++'},
    {id:4,name:'MongoDB'},
]


// app.get("/courses/:id",(req,res)=>
// {
//     let course=rout.find((course)=> 
//     {
//         return course.id=== parseInt(req.params.id)
//     })
//     res.send(course)
//     console.log(course);
// })


app.get("/courses/:cname",(req,res)=>
{
    let course=rout.find((course)=> 
    {
        return course.name=== req.params.cname
    })
    console.log(req.params);

    if(!course)
    {
        res.status(404).send("Course u are looking for does not exists")
    }

    res.send(course)
})


app.get("/courseslist",(req,res)=>
{
    res.send(rout)
})


//Post method
app.post("/Addcourse",(req,res)=>
{
    const course={
        id:rout.length+1,
        name:req.body.name
    }
    rout.push(course);
    res.send(course)
})



//http put method
//put method used for updating the already existing value
app.put("/courses/:cname",(req,res)=>
{
    let course=rout.find((course) =>
    { return course.name=== req.params.cname})

    if(!course) res.status(404).send("Error Not found")

    course.name=req.body.name;
    res.send(course)

})



//http delete method

app.delete("/course/:cname",(req,res)=>
{
    let updated=rout.filter(course => course.name!=req.params.cname)
    rout=updated;
    res.send(rout)
})


app.listen(port,()=>
{
    console.log(`Server Running in the port ${port}`);
})