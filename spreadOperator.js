// let us say we have an arrray and we want to pass that array as an argument 
// to a function . What should we do .
// and here the spread operator(...) come into action 
// which spreads the array elements 
// which can be remade into array by using rest operator 
// here is how we'll do
let arr = [20,30,40,50];
function sum(name,...arg){
    var sum =0
    for (let i in arg){
        sum += arg[i];
    }
    console.log(`${name}: your sum is ${sum}`);//Manish: your sum is 140
}
sum("Manish",...arr);// spread operator is used to spread the values of array and can be passed 



// array concatenation
let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let array3 = [9,10,11,12];
// normal way 
let array4 = array1.concat(array2,array3);
console.log(array4); //[1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ,11 ,12]
// but this is not too good to use in case of multiple array to be concated
// lets see how it is done by using spread operator
let array5 = [...array1,...array2,...array3];
console.log(array5);//[1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ,11 ,12]