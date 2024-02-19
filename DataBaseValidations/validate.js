const mongoDB=require("mongoose")

mongoDB.connect('mongodb://127.0.0.1/ValidationDB')
.then(()=>{
    console.log("DataBase Connected SUccessfully");})
    .catch((err)=>
    {
        console.log(err);
    })


    //1 Validation can be Done by adding required :true ,while declaring the schema
const stdSchema=mongoDB.Schema(
    {
        name:{type:String,required:true,minlength:3,maxlength:16},
        srn:{type:String,required:true},
        yoj:{type:Date,default:Date.now},
        pswd:{type:String,required:true},
        mob:{ type: Number, required: true, min: 1000000000, max: 9999999999 },
        category:{
            type:String,
            required:true,
            enum:["DSA","CNN","IOT","BackEnd"]
        }
    }
)


const Student=mongoDB.model("StdValid",stdSchema)


async function addRecord()
{
    const rec=new Student(
        {
            name:"Bwer",
            srn:"R22EF001",
            pswd:"B@123",
            mob:9878907812,
            category:"DSA"
        })
    try {
         let res=await rec.save();
         console.log(res);
    
    } catch (error) {
        console.log(error);
    }
}

addRecord()