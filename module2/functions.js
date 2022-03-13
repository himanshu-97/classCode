//function in js
function sayHello(){
    console.log("Hello");
}
sayHello();

//function with parameter
function add(a,b){
let sum = a+b;
console.log(sum);
}
add(2,3);

//function with return type
function mul(a,b){
    return a*b;
}
let ans = mul(3,9);
console.log(ans);

//Storing a function in a variable
//functions are first class citizen in js 
let a = function sub(n1,n2){
    return n1-n2;
}
console.log(a(9,6));

//IIFE - Immediately Invoked Function EXPRESSION
(function(){
    console.log("Hello From IIFE");
})();

//IIFE with parameter
(function(a,b){
console.log(a/b);
})(10,5);

































