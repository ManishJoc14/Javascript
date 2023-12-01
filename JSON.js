//JSON is just a text similar to object
// a regular js object
let obj = {
    name : "Manish",
    age : 19,
} 

// to convert obj to json
let jsonText = JSON.stringify(obj); 
console.log(jsonText);//'{"name":"Manish","age":19}'

// to convert json into obj
let newobj = JSON.parse(jsonText); // newobj is object we now we can acess values
console.log(newobj.name);