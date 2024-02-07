//Middle wares are the heart of Express which is reponsible for the responses, that is getting through http protocol
//A request handler with access to the application's request-response cycle is known as middleware

//Before getting response from the server data must travel from one middle ware to other middleware and other to next middleware like this,after this we are getting response


const express=require("express")
const app=express()
const port=5000;

//use method is used for accessing middleware
app.use(express.json())

// app.use((req,res)=>
// {
//     console.log("Customised Middleware");
// })

app.get("/",(req,res)=>
{
    res.send("Hello Well Done 🤝")
})

app.listen(port,(req,res)=>
{
    console.log(`Server Running in http://localhost:${port}`);
})