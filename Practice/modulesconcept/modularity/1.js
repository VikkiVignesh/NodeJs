let name="hello"

console.log(global.name);
//importing other module to the file
const add=require("./test2")

add.addition(2,3)
add.division(3,2)
add.multiplication(2,3)
add.subtraction(4,2)
add.modulus(2,4)