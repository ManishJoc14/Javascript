// Var 
// we can re-declare and re-assign its value
var x = 10;
var x = 20; //re-declare 
x= 30; //re-assign

// let 
// we cannot re-declare but we can re-assign its value
let y = 10;
y = 20; //re-assign

//const 
// we can neither re-declare nor re-assign
const z = 10;


// var has global scope 
if(true){ //this is a block scope
    var a = "hello"; //variable declared with var has global scope
}
console.log(a); // so we can get a here

// let and const have block scope
if(true){ //this is a block scope
    let b = "world"; //variable declared with let has block scope
    const c = "Nameste";
}
// console.log(b); // so we cannot get b here : uncaught reference eror : b is not defined
console.log(c); // uncaught reference eror : c is not defined
