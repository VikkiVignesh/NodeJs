const myprom=new Promise(function (resolve,reject)
{
  let a=3,b=31;
  setTimeout(() => {
    if(a===b)
    {
        resolve("Numbers are Equals");
      }
      else
      {
        reject("Numbers are not Equals");
      }
  }, 2000);

 
})

myprom.then((res)=>
{
    console.log(res);
})
.catch((err)=>
{
    console.log(err);
})