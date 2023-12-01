// async function returns promise
// let test = async ()=> "hello";
// test().then( result=>console.log(result)).catch(err=>console.log(err));

// async function test() {
//   console.log("A");
//   await console.log("B"); //after completing this line it waits to run other lines
//   console.log("C"); //it will be printed in last
// }
// test();
// console.log("D");
// console.log("E");

// The JavaScript engine will first execute the console.log("A") statement in the test() function. Then, it will suspend execution of the test() function and wait for the console log statement that logs "B" to be resolved.

// Meanwhile, the JavaScript engine will continue executing the main code path, which means that it will log "D" and "E" to the console.

// Once the console log statement that logs "B" is resolved, the JavaScript engine will resume execution of the test() function. The JavaScript engine will then log "C" to the console.

// async function test(){
//     console.log("2: message");
//     const response = await fetch("https://fakestoreapi.com/products/1");
//     console.log("4: message");
//     const student = await response.json(); // response is returned by fetch method as json data
//     console.log("5: message");

//     return student;
// }
// console.log("1: message");
// let dataStore = test();
// console.log("3: message");
// console.log(dataStore);

async function test(){
    const response = await fetch("https://fakestoreapi.com/products/1");
    const post = await response.json(); // response is returned by fetch method as json data
    return post;
}
test().then(res=>console.log(res)).catch(e=>console.log(e));

// async function test(){
//     return (await fetch("json.json")).json();
// }
// test().then(res=>console.log(res)).catch(e=>console.log(e));
