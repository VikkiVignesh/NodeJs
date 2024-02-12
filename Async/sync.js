//sync - its a block vise process one by one  will be executed as it's a single threaded programming language
//async - it allows multiple purpose at a time

const fs=require("fs")


console.log("First Line");

let test=fs.readFileSync('D:\\ComputerScience\\Nodejs\\Practice\\Async\\test.txt')
console.log(test);

console.log("Last Line");