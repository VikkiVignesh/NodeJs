function add(a,b)
{
   console.log(a+b);
}

function sub(a,b)
{
   console.log(a-b);
}

function div(a,b)
{
   console.log(a/b);
}

function mul(a,b)
{
   console.log(a*b);
}

function mod(a,b)
{
   console.log(a%b);
}

//exporting functionalities out side the file so that we can access outside of this file
module.exports={
    addition:add,
    subtraction:sub,
    division:div,
    multiplication:mul,
    modulus:mod

}