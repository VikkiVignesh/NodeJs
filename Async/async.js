const fs=require("fs")


console.log("First Line");

//Searial execution of async functions
fs.readFile('D:\\ComputerScience\\Nodejs\\Practice\\Async\\test.txt',cb1)

function cb1(err,data) {
    if(err)
    {
        console.log("Error Occured");
    }
    console.log(data);
    fs.readFile('D:\\ComputerScience\\Nodejs\\Practice\\Async\\test2.txt',cb2)

}



function cb2(err,data) {
    if(err)
    {
        console.log("Error Occured");
    }
    console.log(data);
fs.readFile('D:\\ComputerScience\\Nodejs\\Practice\\Async\\test2.txt',cb3)
}

function cb3(err,data) {
    if(err)
    {
        console.log("Error Occured");
    }
    console.log(data);
}


console.log("Last Line");