const express=require("express")
const router=express.Router();
//Above line  is responsible for different routes
const Joi=require("joi")

const mongo=require("mongoose");




const schema=mongo.Schema(
    {
        name:{type:String,required:true,minlength:3,maxlength:20}
    }
);


const Category=mongo.model("Courses",schema);



router.get("/api",(req,res)=>
{
    res.send("Welcome to BackEnd Project 👨‍💻");
})

router.get("/api/categories",async (req,res)=>
{
    let data=await Category.find()
    res.send(data);
})

router.post("/api/addCategory",async (req,res)=>
{
    //{a} this is a object destructing method in javascript ,it allows the user to access part of data from the function
    const {error}=validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const data= await new Category(
        {
            name:req.body.name
        })
     let resu=await data.save()
     res.send(resu);
})


router.put("/api/modify-cat/:id",async (req,res)=>
{
    const {error}=validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
   const upd=await Category.findByIdAndUpdate(req.params.id,
    {name:req.body.name},{new:true})
   
    if(!upd) res.status(404).send("Data You are Looking For,is  Not Found Here")
   res.send(upd);

})


router.delete("/api/delete/:id",async (req,res)=>
{
    try {
        const result=await Category.findByIdAndDelete(req.params.id);
    if(!result) res.status(400).send("Delete Operation UnSuccessfull")
    res.send(result)
    } catch (error) {
        console.log(error);
        res.send("Internal Error !!!")
    }
    
   
})



router.get("/api/category/:id",async (req,res)=>
{
    const cat=await Category.findById(req.params.id)
    if(!cat) res.status(404).send("Course You are Looking for Not Found !!")
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