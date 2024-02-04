/*https://github.com/VikkiVignesh/NodeJs.git*/
/**https is a module it allows it share data through http protocols */

/** to run nodemon
 * 1.npm i nodemon
 * 2.in package.json add this 2 things in scripts 
 *   i.start: node mainfilename.js
 *   ii.dev: nodemon mainfilename.js
 *  To run the file using nodemon type
 *   nodemon start || npm run dev */ 
const http=require('http');

http.createServer(function (req,res) {
    res.write('Hello World!');//write response to the user
    res.end();
}).listen(8000,()=>{
    console.log(`Server running in http:/localhost:${8000}`);
});

