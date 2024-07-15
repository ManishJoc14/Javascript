// objects
// creating empty object
let obj1 = {};


let obj2 = {
    name : "john",
    age  : 20,
};
// here name is key and "john" is its value
// age is also a key and 20 is a value
// key is also known as property 
// keys are converted to string

// to access values
// 1. using dot notation
// console.log(obj2.name); // john
// console.log(obj2.age); // 20

// console.log(obj2."name"); // error :- Unexpected string
// console.log(obj2."age"); // error :- Unexpected string
// do not put string("") after dot

// // 2. using [] notation
// console.log(obj2["name"]); // john
// console.log(obj2["age"]); // 20
// always use string ("") inside [] (but not for variables)

// console.log(obj2[name]); // error :- name is not defined
// console.log(obj2[age]); // error :- age is not defined
// treats name and age as variables and they don't exist so error

// keys are converted to string
// to use number as a key
let objj = {
    1 : "one",
    2 : "two",
    3.1 : "three . one",
    "4.2" : "4 . 2",
}
// console.log(objj.1) // error
// console.log(objj."1") // error
// console.log(objj["1"]); // one
// console.log(objj["2"]); // one
// console.log(objj["3.1"]); // three . one
// console.log(objj["4.2"]); // 4 . 2
// conclusion : when numbers are key use [] notation


// to use multiword as a key (wrap in quotation "")
// and to access use []
let obj3 = {
    "user name": "john doe",
    age : 20,
};
// console.log(obj3.user name); // error
// console.log(obj3["user name"]); // john doe
// console.log(obj3["age"]); // 20
// console.log(obj3.age);  //  20



// flexibility in []
let obj4 = {
    name : "john",
    age : 20,
}

let key = "age";
// console.log(obj4[key]); // 20
// console.log(obj4.key);  // undefined



// Computed properties :- varibales value as a key
let color1 = "red";
let color2 = "yellow";
let obj5 = {
    [color1] : "apple",
    [color2] : "banana",
}
console.log(obj5.color1); // undefined
console.log(obj5.color2); // undefined
console.log(obj5[color1]); // apple 
console.log(obj5[color2]); // banana

console.log(obj5.red);    // apple
console.log(obj5.yellow); // banana
console.log(obj5["red"]); // apple
console.log(obj5["yellow"]); // banana

// Property names limitations
// these properties are all right for key only
let obj6 = {
  for: 1,
  let: 2,
  return: 3
};

console.log( obj6.for + obj6.let + obj6.return );  // 6

// minor gotcha with a special property named __proto__
let obj7 = {};
obj7.__proto__ = 5; // assign a number
console.log(obj7.__proto__);// [Object: null prototype] {}
// we cannot use __proto__ as a key for non-object value

obj7.__proto__ = {name : "john"}; // assign a obj
console.log(obj7.__proto__);// { name: 'john' } // works well


// to check if property exits (using in operator)
let obj8 = {
    name : "john",
    age : 20,
}
console.log("name" in obj8); // true
// console.log(name in obj8); // name is not defined
console.log(obj8.name in obj8); // false

// console.log("age" in obj8); // ture
// console.log(age in obj8); // age is not defined
console.log(obj8.age in obj8); // false


// for in loop for object
let obj9 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in obj9) {
 console.log(key, obj9[key]);
//  console.log(key, obj9.key); // value will be undefined
}
for (let objPropteryName in obj9) {
 console.log(key, obj9[objPropteryName]);
//  console.log(key, obj9.objPropteryName); // value will be undefined
}
// key and objPropteryName are just looping varibales here 
// you can use any varibale name


// if we loop over an object, do we get all properties in the same order they were added
// “ordered in a special fashion”: integer properties are sorted, others appear in creation order.'
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49 
}

// "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:
// here is how 
// Math.trunc is a built-in function that removes the decimal part
console.log( String(Math.trunc(Number("49"))) ); 
// "49", same, integer property

console.log( String(Math.trunc(Number("+49"))) ); 
// "49", not same "+49" ⇒ not integer property

console.log( String(Math.trunc(Number("1.2"))) ); 
// "1", not same "1.2" ⇒ not integer property


// delete keyword 
let obj10 = {
    name1 : "john1", 
    name2 : "john2", 
}

delete obj10.name1; // name1 deleted
console.log(obj10); // { name2: 'john2' }

// assignment
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.












