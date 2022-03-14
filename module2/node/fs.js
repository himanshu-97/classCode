let fs = require("fs");
// console.log(fs);


//CRUD - CREATE, READ, UPDATE, DELETE


//1.CREATE
//Creating path for fs.writeFileSync
let path = require("path");
let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

//"creating" the file with the help of fs.writeFileSync
//1st - if file is not present, it creates file
//2nd - if file exists, it overwrites the existing content 
fs.writeFileSync(filePath,"Hello I am file.js");

//"Creating" the folder/directory with the help of fs.mkdir
fs.mkdir(path.join(__dirname,"yo"), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});

//overwriting existing file
fs.writeFileSync(filePath,"Hello I am file.js and content is overwritted by writeFileSync");

//"Reading" the file with the help of fs.readFileSync
let content = fs.readFileSync(filePath,"utf-8");
console.log(content);

//"Reading" the folder/directory with the help of fs.readdir
let dirContent = fs.readdir(path.join(__dirname,"yo"), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Reading Directory successfully!');
});

//"Updating" the file with the help of fs.appendFileSync
console.log("Before Update :");
let readBefore = fs.readFileSync(filePath,"utf-8");
console.log(readBefore);
fs.appendFileSync(filePath,", \nUpdating Content by appendFileSync"); // \n for newline
console.log("After Update :");
let readAfter = fs.readFileSync(filePath,"utf-8");
console.log(readAfter);

//"DELETE" the file by fs.unlinkSync
fs.unlinkSync(filePath);

//"DELETE "the folder by fs.rmdir()
fs.rmdir(path.join(__dirname,"yo"),(err) => {
    if (err) {
        return console.error(err);
    }
    console.log('DELETED FOLDER SUCESSFULLY!');
});

//fs.copyFile( src, dest, mode, callback )
//first we fill create a file
let filePath1 = path.join(__dirname,"originalFile.js");
fs.writeFileSync(filePath1,"originalFile.js");

//Creating destination
let desPath = path.join(__dirname,"copiedFile.js");

//copying file
fs.copyFile(filePath1, desPath,(err) => {
    if (err) {
        return console.error(err);
    }
    console.log('COPIED FILE SUCESSFULLY!');
});
