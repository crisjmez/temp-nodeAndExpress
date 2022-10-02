
//#region GLobals 
//__dirname - path to current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - info about current module (file)
//process - info about env where th eprogram is being executed
//#endregion


//#region built-in Modules
//os - to operate with system and the server
//path
//FS
//#endregion

/*http modules
createServer(res, req);
res.write(string);
res.end();
req.url('url';);
server.listen(port);
*/


/*npm
    npm --version
    npm i <packagename> local dependecy
    npm -g <packgename> global dependecy
    package.json - manifest file  (stores important info about project/package)
    npm init (step by step, press enter to skip)
    npm init -y (everythig default)
*/

let http = require('http');
http.createServer((req, res)=>{
res.end();
}).listen(5000);