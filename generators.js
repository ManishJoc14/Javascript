// if we want full control in functions we make generators
function *test(){
    yield console.log("First");// yields means pause
    yield console.log("Second");
    // console.log("Third");
    yield "Third yield";
}
let g = test();
g.next(); // First
g.next(); // Second
g.next(); // third
console.log(g.next());//{value: 'Third yield', done: false}



// function *generator(){
//     yield "php";
//     yield "js";
//     yield "py";
// }
// let G = generator();
// console.log(G.next().value);//php
// console.log(G.return("Ending now"));//{value: 'Ending now', done: true}