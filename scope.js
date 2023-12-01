// the scope is by deefault global 
// window is a global object 
// there are 3 scopes 
// 1. global 2. local(inside function) 3.block (inside curly braces)

// // Global scope
// var name = 'manish';
 
// function sayName(){
//     var marks = 100;
//     console.log(name); // manish (since name is declared globally )
// }
// sayName();
// console.log(marks); 
// //scope.js:10 Uncaught ReferenceError: marks is not defined
// // since marks is declared locally inside a function 

// // since completion of function Global execution context (GEC) for function
// //  is destroyed and we cannot access the marks outside it



// // global scpope
// var x =0;

// // local scope
// function first(){
//     // local scope #1
//     var x=1;
//     console.log(`through ${x}`);//through 1
//     function childOfFirst(){
//         // local scope #2
//         var x= 2;
//      console.log(`through ${x}`);//through 2
//     }
//     childOfFirst();
// }
// first();

// function global(){
//     console.log(`through ${x}`);//through 0 (declared globally)
// }
// global();



// block scope works for let cost
// var x=10;   
// {
//     var x=1; //rewrites value of x 
//     console.log(x); // 1
// }
// console.log(x); // 1

// var x=10;   
// {
//     let x=1; //rewrites value of x 
//     console.log(x); // 1
// }
// console.log(x); // 10
// // use let and const inside a block to make sure
// // variable is not overwritten



// lexial scope concept 
function dada(){
    var name = 'Amlesh Kumar';
    // likes is not accessible here 
    function papa(){
        console.log(name); //Amlesh kumar
        // name is accessible here
        // but likes is not accessibl here 
         function beta() {
            // innermost level of the scope
            // name is accesible here
            likes = 'coding';
         }
         console.log(likes);//uncaught reference error: likes
         beta();
    }
    papa();
}
dada();