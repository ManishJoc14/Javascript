4
// if we want to travel across the array elements 
// we can use 
// while(),do..while(),for(),for..of(),for..in(),forEach(),map()..

// iterators is a new method
// we have full control of loop

var x = ["apple","orange","grapes"];
let y = x[Symbol.iterator]();
// console.log(y.next()); //{value: 'apple', done: false}  we have next value left so it returns false
// console.log(y.next()); //{value: 'orange', done: false} we have next value left so it returns false
// console.log(y.next()); //{value: 'orange', done: false} we have next value left so it returns false
// console.log(y.next()); //{value: undefined, done: true} we don't have next value left so it returns true 

// since it is a object we can get its value too
console.log(y.next().value); //apple
console.log(y.next().done); // false

let str = "Manish Joshi";
let number = [10,20,30,40,50];
let itr = number[Symbol.iterator]();
let result = itr.next();
while(!result.done){
    console.log(result.value);
    result = itr.next();
}

for(char of str){
    console.log(char);
}
