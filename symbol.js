var x = Symbol("Hello"); // data type symbol
// if we want to have unique values we use this 
// an example 
var y = Symbol("Hello");
// may be you are thinking that x and y are equal 
// but they have different values .. see 
if (x==y) {
    console.log("They are equal");
}
else{
    console.log("They are different"); //They are different
}

// we cannot directly print its value in document
//console.log(x); //Uncaught TypeError: Cannot convert a Symbol value to a string
// at first we have to change it into string
console.log(x.toString());// Symbol(Hello)
// if we want its value only then 
console.log(x.description); // Hello

// to use symbol inside object
let age = Symbol("age");

let user = {
    name : "Manish",
    [age] :20,
    gender : "Male"
}
console.log(user.name);
console.log(user[age]); // to view value of symbol use like this

// we cannot print symbol using for in loop
for(let key in user ){
    console.log(key); //name gender it skips symbol age
}

// if we convert obj to json and print it again here it skips symbol
console.log(JSON.stringify(user));