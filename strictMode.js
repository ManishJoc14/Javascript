/*
// here is syntax error 
a = 10; // var let const is not writen (declaration type not written)
console.log(a); //but the value is printed
//sometimes these mistakes leads to huge problem 
// to avoid this we use strict mode 
*/

// "use strict";
x= 10
console.log(x); // Uncaught ReferenceError: x is not defined
//if we use strict
function add(a,b,b){ //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a+b+b);
}
add(10,20,30);
//try after commenting use strict
// then you will get an wrong output 70
// actual ans is 60
// to aviod these we use strict mode