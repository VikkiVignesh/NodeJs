const { default: mongoose } = require("mongoose")
const mongo=require("mongoose")

async function connectDb()
{
    try {
        const connect= await mongo.connect("mongodb://127.0.0.1/Operations")
        console.log("Connected to DataBase Successfully");
    } catch (error) {
    console.log(error);
    }
}

connectDb()

const schema=mongo.Schema(
    {
        name:String,
        srn:String,
        Dob:Date,
        course:String,
        enrolled:{type:Date,default:Date.now},
        cpga:{type:Number,required:true}
    }
)

const table1=mongo.model("Student",schema)



async function insertRecord() {
    
try {
    const rec1=new table1(
        {
            name:"Vikki",
            srn:"R21EF337",
            Dob:new Date("11-09-2004"),
            course:"DSA",
            cpga:8
        }
    )
    let res=await rec1.save()
    console.log(res);
    
} catch (error) {
    console.log(error);
}
}

insertRecord()


async function display()
{
    try {
        
        //let find= await table1.find({$and:[{cgpa:{$gt:5}},{cgpa:{$lt:11}}]}).select({name:1,course:1,cpga:1})
        let find=await table1.find({cpga:{$in:[3,,8,10]}}).select({name:1,course:1,cpga:1})
        console.log(find);
    } catch (error) {
        console.log(error);
    }
}

console.log("Displaying Selecetd Rows");
display()



async function update(id)
{
    try {
   
        let upd= await table1.findById(id);
        if(!upd) 
        {  console.log("Document Not Found!!");
            return;
        }
          upd.name="Vignesh"
          upd.course="AIML"
          let res=await upd.save();
          console.log(res);
        
    } catch (error) {
      console.log(error);  
    } 
}


update('65ce05343b163fc386d7d8a7')


async function deletereco(id) {
    
    try {
        
        let res=await table1.findByIdandDelete(id)
    } catch (error) {
        console.log(error);
    }
}

deletereco('65ce0582f5a25b07ccf5b0e0')