//move a file

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname,"move.txt");
let desPath = path.join(__dirname,"..","move.txt");

fs.copyFileSync(srcPath,desPath);
fs.unlinkSync(srcPath);

