const http=require("http")
const port=8000;

const server=http.createServer((req,res)=>
{
    res.statusCode=200;
    res.end('Hello Vikki \n');

});

server.listen(port,()=>
{
    console.log(`Server running at http://localhost:${port}`);
})