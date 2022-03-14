//empty obj
let obj = {};
console.log(obj);

//adding key-value pair or data in obj
let o = {
    "name":"abc",
    "age":24,
    "Number":9999999,
    lastName:"def"
};
console.log(o);

let capAmerica = {
    name:"Steve",
    age:999,
    friends:["Natasha","Bruce","Thor","Ironman"],
    address:{
        city:"Queens",
        state:"USA"
    },
    saysHello:function(){
        console.log("Hello From Cap America");
    }
}
console.log(capAmerica);

//name of capAmerica
console.log(capAmerica.name);

//age of capAmerica
console.log(capAmerica.age);

//friends of capAmerica
console.log(capAmerica.friends);

//first friend of capAmerica
console.log(capAmerica.friends[0]);

//address of capAmerica
console.log(capAmerica.address);

//city of capAmerica
console.log(capAmerica.address.city);

//calls saysHello function
capAmerica.saysHello();
