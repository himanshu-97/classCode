//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let arr = ["audio","video","image","software","documents","applications","other"];

let fs = require("fs");
let path = require("path");

for(let j =0; j<7;j++){
    if(!fs.existsSync(path.join(__dirname,arr[j]))){
        fs.mkdirSync(path.join(__dirname,arr[j]));
        let dirPath = path.join(__dirname,arr[j]) ;
        for(let i =0; i<4; i++){
        let filePath = path.join(dirPath,"file"+i+"."+arr[j]);
        fs.writeFileSync(filePath,"audio"+i);
    }
}
    else{
     console.log("Dir Exist");
    }

}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//OTHER WAY - 


let fs = require("fs");
let path = require("path");

let arr = ["audio","video","image","software","documents","applications","other"];
let fileName = ["abc","def","hij","klm"];
let fileExtName = [".mp3",".mp4",".jpg",".exe",".pdf",".apk","rar"];

organiseFolderPath = path.join(__dirname,"organised");
if(!fs.existsSync(organiseFolderPath)){
    fs.mkdirSync(organiseFolderPath);
}
else{
    // console.log("Same Name Folder");
}
for(let i = 0; i<arr.length; i++){
let folderPath = path.join(organiseFolderPath,arr[i]);
{
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
}
for(let j = 0;j<fileName.length; j++){
let fileAdd = fileName[j]+fileExtName[i];
let filePath = path.join(folderPath,fileAdd);
fs.writeFileSync(filePath,"");
}
}



