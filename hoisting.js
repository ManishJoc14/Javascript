// var foo = "bar"; // Declaring foo and assigning "bar" to it
// var foo = "baz"; // I can redclare same varible twice with var in same scope , this will overwrite previous

// let foo = "bar"; // Declaring foo and assigning "bar" to it
// let foo = "baz"; // Identifier 'foo' has already been declared, cannot redeclare in same scope
console.log(foo);



// sayHello();
// console.log(i);
// function sayHello() {
//   console.log("hello");
// }
// var i = 10;  // var variables are hoisted

/*
phase 1 
memory allocation before code execution is known as hoisting
 Memory allocation 
    line 1 and 2 doesn't have any value and 
in memory allocation phase 
     in line 3 function is defined and function's code is stored
      but in line 3 varible i is defined and value undefined is stored intially
      
phase 2 thread of execution 
    in call stack 

     line 1 is execuetd and function is called and in memory allocation phase
     code is stored in it .. so the code gets execuetd ...
    we get "hello " as output
      
    and line 2 gets executed 
    since undefined value is stored in memory for i
     so in printing the value of i we get undefined as output 

    since memory is stored for both function and i 
    we can say both of them are hoisted.

*/

// sayHello();
// console.log(i);
// function sayHello() {
//   console.log("hello");
// }
// let i = 10;        // let variables are not hoisted

/*
the variables declared by let are under temporal dead zone
that means until the variables are initialized we cannot access their values if we try get their value we get uncaught reference error.
and code execution gets stopped.

*/
// var sayHello, i ;
// sayHello();
// console.log(i);
// var sayHello = function (){
//     console.log("hello");
// }

// var i=10;
/* 
 since sayHello is allocated with undefined value 
  we cannot access it and got uncaught type error : sayHello 
  is not a function .
*/

// let foo = "bar"; // global variable
// if (true) {
//   let foo = "baz"; // local variable ; we cannot do var here, since food is already declared with global scope,
//   // again we cannot declare foo with global scope (since var var doesn't consider block scope
//   // it has a global scope or function scope)
//   console.log(foo);
//   //  baz
// }
// console.log(foo);
// bar
// let follows block scope
// in this case, we're not actually redeclaring the same variable twice.
// Instead, we're declaring two separate variables with the same name, each with its own scope.
// priority of global varibale is less then local varibale
// we can redeclare same varible but within different scopes

// var foo = "bar"; // Global scope

// if (true) {
//   // Inside a block, but var doesn't respect block scope
//   var foo = "baz"; // This reassigns the value of the global foo
//   console.log(foo); // Output: baz
// }

// console.log(foo); // Output: baz (value reassigned in the block)


// var foo = 'bar';
// function sayHello(){ // function local scoope
//     var foo = 'baz';
//     console.log(foo);
//     // baz
// }
// sayHello();
// console.log(foo);
// bar
// out of function scope variables defined with var are
// not changed

/*
at first Global execution context (GEC) is created in stack
 phase 1 ..  memory allocation for 
 87. foo = undefined 
 88. sayHello = its code ;

phase 2 .. execution
    and then value is assigned ,
    foo = 'bar'
    then in 93. new GEC is created for codes inside function 
        again for this 
        phase 1.. memory allocation
             foo = undefined
       phase 2 .. execution
             foo = 'baz'(89)
             by 90 console we get output as baz             
    created GEC for function is destroyed and call goes to 
previous GEC 
and then by 94 console we get output as bar (107)

          
      
 
   


*/
