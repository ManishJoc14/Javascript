//we make promise() 
// if promise is fulfilled then it is called resolve() 
// and after then we can then()
// if promise id not fulfilled it is called reject()
// and after then we ca call catch()
//  function prom(condition){
//     return new Promise (function(resolve,reject){
//     if (condition) {
//         resolve("Here is sucess");
//     } else {
//         reject("Here is reject");
//     }
//   });
// }
// let onfulfillment = (result)=>{
//     console.log(result);
// }
// let onRejection = (error)=>{
//     console.log(error);
// }
// //then(),catch() are inbuilt js functions
// prom(true).then(onfulfillment).catch(onRejection);

// More efficeint way
// function prom(condition){
//     return new Promise (function(resolve,reject){
//         console.log("Fetching Data, Please Wait..");
//         setTimeout(() => {
//             if (condition) {
//                 resolve("Here is sucess");
//             } else {
//                 reject("Here is reject");
//             }
//         },1000);
//   });
// }
// //then(),catch() are inbuilt js functions
// prom(true).then(result=> console.log(result)).catch(error=>console.log(error));


function prom(a,b){
    return new Promise (function(resolve,reject){
        console.log("Fetching Data, Please Wait..");
        var c = a/b;
        setTimeout(() => {
            if (a,b) {
                resolve(`Your ans is : ${c}`);
            } else {
                reject("Failed to calculate");
            }
        },1000);
  });
}
//then(),catch() are inbuilt js functions
prom(6,3).then(result=> console.log(result)).catch(error=>console.log(error));