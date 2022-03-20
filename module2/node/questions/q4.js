// read content of unorganised folder and make an array which has extension name of each file


let fs = require("fs");
let path = require("path");
//path of organised folder
let unContent = fs.readdirSync(path.join(__dirname,"questions","unorganised")); 
console.log(unContent);

let arr = [];
for(let i = 0 ; i<unContent.length; i++){
let fileName = unContent[i];
let extname = path.extname(fileName);
arr.push(extname);
}
console.log(arr);
