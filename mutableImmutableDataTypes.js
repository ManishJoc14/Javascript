const log = console.log

// primitive data-types
// number, string, bolean, symbol, null, undefined
// they are stored as a value hence
// they are immutable means we cannot change the value in place(directly  in memory)
// we create a new value and assign it to them again
// lets take examples
let num = 10
num = num + 20;  
// num = 10 + 20 = 30, we cannot directly change the value in memory
// we create new values and assign again which results change in value

let name = "aaa"
name[0]= "b"
log(name); // output: aaa => did you expect baa
// remember string is immutable 
// we cannot change the value in place directly
// instead we can assign it to different value 
name = "baa"
log(name)  // output: baa


// non-primitive data-types
// array, object, function
// they are stored as a reference(holds its address)
let array = [1,2,3]
array[0] = 0  // array is mutable, value can be changed in place directly
log("array: ",array)  // array: [ 0, 2, 3 ] 
let arrayCopied = array
arrayCopied[0] = -1   // we are changing copied array but it reflects in 
// original array, so we can say arrayCopied is pointer to array
log("array: ",array)  // array:  [ -1, 2, 3 ]

// object is similar to array
let object = {
    age : 20
}
object.age = 10  // object is mutable, value can be changed in place directly
log("object: ",object)  // object:  { age: 10 }
let objectCopied = object
objectCopied.age =0   // we are changing copied object but it reflects in 
// original object, so we can say objectCopied is pointer to object
log("object: ",object)  // object:  { age: 0 }



// const doesn't allow re-assignment
// in push we are not re-assigning
// names always contains the same reference even after pushing
const names = ["manish"]
names.push("joshi")
log(names);

// same logic applies here
// we are not updating the reference to obj, we are changing the value
const student = {
    name : "manish"
}
student.name = "joshi"
log(student)