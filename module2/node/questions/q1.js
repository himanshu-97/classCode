
//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let path = require("path");
let fs = require("fs");

if(!fs.existsSync(path.join(__dirname,"q1Dir"))){
    fs.mkdirSync(path.join(__dirname,"q1Dir"));
    let dirPath = path.join(__dirname,"q1Dir");
    let filePath = path.join(dirPath,"q1.txt");
    fs.writeFileSync(filePath,"new file has been made");
}
else{
    console.log("same name folder exist");
}
