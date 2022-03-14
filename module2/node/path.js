// "/Users/himanshugupta/Desktop/FJP-6/module2/node/path.js"

let path = require("path");
console.log(path);


//TO FIND EXTENSION OF FILE, EG - ABC.JS, EXTENSION IS .JS
let extensionName = path.extname("/Users/himanshugupta/Desktop/FJP-6/module2/node/path.js");
console.log(extensionName);

//TO FIND BASE NAME OF FILE, EG - ABC.JS, BASE NAME IS ABC.JS
let baseName = path.basename("/Users/himanshugupta/Desktop/FJP-6/module2/node/path.js");
console.log(baseName);

//Directory path
console.log(__dirname);

//File path
console.log(__filename);

//TO FIND BASE NAME USING __filename
let fileName = path.basename(__filename);
console.log(fileName);

//JOIN - USED FOR ADDING FILE TO DIRECTORY WITHOUT THE HASLE OF / OR // OR \ ETC.
let dirName = __dirname;
console.log(dirName);
let newDir = path.join(dirName,"test.js");
console.log(newDir);
