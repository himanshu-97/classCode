let fs = require("fs");
// console.log(fs);


//CRUD - CREATE, READ, UPDATE, DELETE


//1.CREATE
//Creating path for fs.writeFileSync
let path = require("path");
let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

//creating file with the help of fs.writeFileSync
//1st - if file is not present, it creates file
//2nd - if file exists, it overwrites the existing content 
fs.writeFileSync(filePath,"Hello I am file.js");

//overwriting existing file
fs.writeFileSync(filePath,"Hello I am file.js and content is overwritted") ;


