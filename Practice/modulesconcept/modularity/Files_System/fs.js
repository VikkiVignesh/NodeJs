const fs=require('fs')

//Read file

let file1=fs.readFileSync("f1.txt")

console.log("File 1 Content "+ file1)


 //Write file

fs.writeFileSync('f2.txt',"This is File2 ")


//delete file

fs.unlinkSync("f2.txt")