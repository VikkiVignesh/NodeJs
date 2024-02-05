//os module is used for accessing info about the os

const os=require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.machine());
console.log(os.networkInterfaces());
console.log(os.version());
console.log(os.cpus());


console.log(os.freemem());

console.log(os.totalmem());