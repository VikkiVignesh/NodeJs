const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/TestDB")
.then(()=>{console.log("Connection Sucessfull");})
.catch(err =>
    {
        console.log("Error");
    })



//Schema
const BookSchema=new mongoose.Schema({
    name:String,
    creater:String,
    data:{type:Date,default:Date.now},
    ispublished:Boolean
});

const Sub=mongoose.model("Subject",BookSchema)



async function createTable() {
    const course=new Sub({
        name:"Gaurdian of Galaxy",
        creater:"Vikki",
        ispublished:true
    })
    try {
        let res=await course.save();
        console.log(res);
    } catch (error) {
        console.log(error());
    }
  
}


async function create2rec() {
    const course=new Sub({
        name:"IronMan 3",
        creater:"Vikki",
        ispublished:true
    })
    try {
        let res=await course.save();
        console.log(res);
    } catch (error) {
        console.log(error());
    }
  
}

// createTable()
// create2rec()
 create2rec()

async function getvalues()
{
    const rows=await Sub.find({creater:"Vikki"});
    console.log(rows);
}


