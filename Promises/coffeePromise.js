
function placeorder(drink)
{
    return new Promise((resolve,reject)=>
    {
        if(drink=="coffee")
        {
            resolve("Coffe Accepted !!");
        }
        else
        {
            reject("Serveed Tea !!!###")
        }
    })
}


function process(ordid)
{
    return new Promise((resolve)=>
    {
        console.log("Ordered Processed");
        resolve(`${ordid} accepted`)
    })
}


placeorder("coffee").then(placed =>
    { 
        console.log(placed);
        let value=process(placed);
        return value;
    })
    .then((val)=> {
        console.log(val);
    })
.catch(err =>{console.log(err);})






//Async and Await
//Async is always used with function ,to make it execute in async manner
//await is similar to callback


async function choose() {
    //let bill= placeorder("coffee") //if we didn't use await keyword it will return the promise(it won;t wait for expasion)
    let bill= await placeorder("coffee")
    console.log(bill);
}

choose()