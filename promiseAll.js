// if we have many Promises we can call of them in one By Promise.all()
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("first promise has resolved");
//         resolve(10);
//     }, 1*1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Secomd promise has Failed");
//         reject("failed");
//     }, 2*1000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Third promise has resolved");
//         resolve(30);
//     }, 3*1000);
// })
// Promise.all([p1,p2,p3]).then(result=>{
//     for (var i in result) { 
//         var total=0;
//         total +=result[i]; }
//         console.log(`Total: ${total}`)}
//     ).catch(err=>console.log(`Error: ${err}`));



let promiseCall =function(returnData,title){
    return function (resolve,reject){
        setTimeout(() => {
            console.log(`${title} promise has resolved`);
            resolve(returnData);
        }, returnData*100);
    }
};
let p1 = new Promise(promiseCall(10,"first"));
let p2 = new Promise(promiseCall(20,"Second"));
let p3 = new Promise(promiseCall(30,"Third"));
let p4 = new Promise(function(resolve,reject){
    reject("The 4th Promise has rejected");
});

Promise.all([p1,p2,p3,p4]).then(result=>{
     for (var i in result) { 
        var total=0;
        total +=result[i]; }
        console.log(`Total: ${total}`)}
    ).catch(err=>console.log(`Error: ${err}`)); 