// import { message as msg,user,test } from "./library.js";
// //we can rename varibles like we did in message as msg
// console.log(msg); //ES6 MODULES
// console.log(user("Manish"));; // Hello Manish
// let obj = new test();//Constructor Method

// to import default function
// we can set default function name like mannu is here.
// import mannu from "./library.js";
// mannu(); // hello default

// // to import everything 
// import * as manish from "./library.js";
// // and use manish.variablename
// console.log(manish.message); //ES6 MODULES
// console.log(manish.user("Manish"));; // Hello Manish
// let obj = new manish.test();//Constructor Method

// using multiple module file
import { myfunc,message,user,test } from "./bridge.js";
myfunc(); // hello default
console.log(message); //ES6 MODULES
console.log(user("Manish"));; // Hello Manish
let obj = new test();//Constructor Method