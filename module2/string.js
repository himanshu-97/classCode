let str = "I AM A STRING";
console.log(str);

//string length
let len = str.length;
console.log(len);

//sliced method - extract part of string
let slice = str.slice(2,5);
console.log(slice);

//replace method - replace some part of string
let replacedStr = str.replace("AM","WAS");
console.log(replacedStr);
console.log(str);

//lowercase, similarly uppercase
let lowerCase = str.toLowerCase();
console.log(lowerCase);

//concat
let firstName = "Himanshu";
let lastName = " Gupta";
// let fullName = firstName+lastName; //shows same result
let fullName = firstName.concat(lastName);
console.log(fullName);

console.log( str.charAt(0));

//split
let splittedArr = str.split(" ");
console.log(splittedArr);

//trim -> remove spaces from both sides of string 
let string = "   Hello World!   ";
let trimmedArr = string.trim();
console.log(trimmedArr);







