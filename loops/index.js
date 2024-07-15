// decision making
// if else

// let age = 19;
// if (age < 18) {
//   // run if true
//   console.log("you can vote");
// } else {
//   // run if false
//   console.log("you cannot vote");
// }

// if (age < 10) {
//   console.log("minor");
// } else if (age > 10 && age < 18) {
//   console.log("teen");
// } else if (age > 18 && age < 25) {
//   console.log("adult");
// } else {
//   console.log("old");
// }

// ternary operator
// condition ? expression1 : expression2;

let canVote = age > 18 ? "can vote" : "cannot vote";
console.log(canVote);

// switch case
// let day = "sunjaskd";

// switch (day) {
//   case "sun":
//     console.log("Today is sunday");
//     break;
//   case "mon":
//     console.log("Today is monday");
//     break;
//   case "tue":
//     console.log("Today is tues");
//     break;
//   case "wed":
//     console.log("Today is wedn");
//     break;
//   default:
//    console.log( "wrong");
//    break;
// }

// Loops
// for loop
// steps is known
// for (initialization; end condition; increament / decrement) {
//   // do something
// }

// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i);
// }

// while loop
// entry controlled loop
// may not run one time at all

// syntax
// while (condition) {
//   //  do smth
// }

// let i = 0;
// while (i < 10){
//     i++; // i = i+1;
//     console.log(i);
// }



// do while loop
// exit controlled loop
// runs at least one time

// syntax
// do {
//   // do smth
// } while (condition);

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//  for in => obj
//  for of => array
//  for each

// Some operators
// Nullish Coalesing operator ??      considers (null, undefined)
// let user;

// let defaultName = "Guest";
// let userName = user ?? defaultName;
// console.log(userName); // "Guest"

// OR operator ||      considers falsy(false, 0, NAN, "", null, undefined)
// let user = null;
// let userName = user || "Guest";
// console.log(userName); // "Guest"

// And operator &&    considers falsy(false, 0, NAN, "", null, undefined)
// short circuiting
// user = "nabin";
// user && console.log(user);
// if(user){
//     console.log(user);
// }
