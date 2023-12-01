// Immediately Invoked Function Expression
let a = ()=> {
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve(456);
    },1000)
})
}

( async()=>{
let b = await a() ;
console.log(b);
let c = await a() ;
console.log(c);
let d = await a() ;
console.log(d);
})();

//we can less pollute global namespace by deleting the whole codes there 
// lets check again the value of b here 
console.log(b);//Uncaught ReferenceError: b is not defined
