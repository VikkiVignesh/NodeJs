//Child process is a node module used to create subprocess with in the script

const cp=require('child_process')

cp.execSync('calc');
//About code opens the particular application based on the commands

cp.execSync("start Msedge https://www.reva.edu.in") //creates a child process and opens reva website


//below line executes the other file in this file
console.log('output '+cp.execSync('node file.js'));