const express=require("express")
const router=express.Router();
//Above line  is responsible for different routes
const Joi=require("joi")

const category=[
    {id:1,domain:"Full stack"},
    {id:2,domain:"Mobile Dev"},
    {id:3,domain:"IOT & Cloud"},
    {id:4,domain:"AIML"}
]

router.get("/api",(req,res)=>
{
    res.send("Welcome to BackEnd Project 👨‍💻");
})

router.get("/api/category",(req,res)=>
{
    res.send(category);
})

router.post("/api/addCategory",(req,res)=>
{
    //{a} this is a object destructing method in javascript ,it allows the user to access part of data from the function
    const {error}=validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const data={
        id:category.length+1,
        domain:req.body.name
    };
    category.push(data);
    res.send(category);
})


router.put("/api/modify-cat/:id",(req,res)=>
{
  const upd=category.find((c)=>{
    return (c.id === parseInt(req.params.id))
  })

  if(!upd) res.status(404).send("Data is not  Exist in the DataBase");

upd.domain=req.body.name;
res.send(category);

})


router.delete("/api/delete/:id",(req,res)=>
{
    const check=category.find((c)=>
    {
        return c.id=== parseInt(req.params.id)
    });
    if(!check)
    {
        res.send("404 Error!!!!!......")
    }
    else
    {
        let ind=category.indexOf(check);
        category.splice(ind,1);
        res.send("1 Entry Deleted Successfully ✂️✂️")
    }

})



router.get("/api/Category/:id",(req,res)=>
{
    const cat=category.find(c =>
        {
            return c.id=parseInt(req.params.id)});
    if(!cat) res.status(404).send("Course You are Lokking for Not Found !!")
     res.send(cat);

})

function validateData(category)
{
    const schema=Joi.object().keys({
        name:Joi.string().min(3).required()
    })

    return schema.validate(category)
}


module.exports=router;