//array
let arr =[];
console.log(arr);

//elements in array
let arrEle=[1,2,3,9,"I am String",false,9.9];
console.log(arrEle);

console.log("Element at 4th index "+arrEle[4]);
console.log("Element at 1st index "+arrEle[1]);

arrEle[3] = "nothing";
console.log(arrEle); 
console.log("########################################################################");
//Arrays method
//push
console.log("Before Push"+arrEle);
arrEle.push("New Item");
console.log("After Push"+arrEle);

//pop
console.log("Before POP",arrEle);
arrEle.pop();
console.log("After POP",arrEle);

//shift
console.log("Before Shift",arrEle);
arrEle.shift();
console.log("After Shift",arrEle);

//Unshift
console.log("Before Unshift",arrEle);
arrEle.unshift("newly addded item");
console.log("After Unshift",arrEle);

//length
let len = arrEle.length;
console.log(len);