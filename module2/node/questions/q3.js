//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let path = require("path");

let fs = require("fs");

// (questions) ".." (node) ".." (module2) ".." (FJP_6) 

let srcPath = path.join(__dirname,"..","..","..","module1","index.html");
let despath = path.join(__dirname,"..","..","index.html");

fs.copyFileSync(srcPath,despath);


