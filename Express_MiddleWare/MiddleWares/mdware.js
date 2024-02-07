//Middle wares are the heart of Express which is reponsible for the responses, that is getting through http protocol
//A request handler with access to the application's request-response cycle is known as middleware

//Before getting response from the server data must travel from one middle ware to other middleware and other to next middleware like this,after this we are getting response

const custware=require("../Custom")

const express=require("express")
const app=express()
const port=5000;

//use method is used for accessing middleware
app.use(express.json())

//whenever we create custmised middleware we should use next() y because middlewares transfer data blw each other
app.use(custware)

app.use((req,res,next)=>
{
    console.log("This is Second MiddleWare");
    next()
})

app.get("/",(req,res)=>
{
    res.send("Hello Well Done 🤝")
})

app.listen(port,(req,res)=>
{
    console.log(`Server Running in http://localhost:${port}`);
})