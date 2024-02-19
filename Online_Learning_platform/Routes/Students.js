const express=require("express")
const router=express.Router();
//Above line  is responsible for different routes
const Joi=require("joi")

const mongo=require("mongoose");





const Stdschema=mongo.Schema(
    {
        name:{type:String,required:true,minlength:3,maxlength:20},
        enrolled:{type:Boolean,default:false},
        mob:{type:String,required:true,minlength:10,maxlength:21}
    }
);


const Std=mongo.model("Student",Stdschema);



router.get("/api",(req,res)=>
{
    res.send("Welcome to BackEnd Project 👨‍💻");
})

router.get("/",async (req,res)=>
{
    let data=await Std.find()
    res.send(data);
})

router.post("/add",async (req,res)=>
{
    //{a} this is a object destructing method in javascript ,it allows the user to access part of data from the function
    const {error}=validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const data= await new Std(
        {
            name:req.body.name,
            enrolled:req.body.enrolled,
            mob:req.body.mob
        })
     let resu=await data.save()
     res.send(resu);
})


router.put("/:id",async (req,res)=>
{
    const {error}=validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
   const upd=await Std.findByIdAndUpdate(req.params.id,
    {   name:req.body.name,
        enrolled:req.body.enrolled,
        mob:req.body.mob
    },{new:true})
   
    if(!upd) res.status(404).send("Data You are Looking For,is  Not Found Here")
   res.send(upd);

})


router.delete("/:id",async (req,res)=>
{
    try {
        const result=await Std.findByIdAndDelete(req.params.id);
    if(!result) res.status(400).send("Delete Operation UnSuccessfull")
    res.send(result)
    } catch (error) {
        console.log(error);
        res.send("Internal Error !!!")
    }
    
   
})



router.get("/:id",async (req,res)=>
{
    const cat=await Std.findById(req.params.id)
    if(!cat) res.status(404).send("Course You are Looking for Not Found !!")
     res.send(cat);

})

function validateData(category)
{
    const schema=Joi.object().keys({
        name:Joi.string().min(3).max(50).required(),
        enrolled:Joi.boolean(),
        mob:Joi.string.min(10).max(21).required(),
        
    })

    return schema.validate(Std)
}


module.exports=router;