//CallBack
let datas = [
    {name:"Manish",profession:"Software Engineer"},
    {name:"Bibek",profession:"Software Engineer"},
]
// function getDatas(){
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data,index) => {
//             output+= `<li>${data.name}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createData(newData,CallBack){
//     setTimeout(() => {
//         datas.push(newData);
//         CallBack();
//     }, 2000);
// }
// createData({name:"Bipin",profession:"Software Engineer"},getDatas);


// // Promise
// function getDatas(){
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data,index) => {
//             output+= `<li>${data.name}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createData(newData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             datas.push(newData);
//             let error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject("Somethting is wrong");
//             }
//         }, 2000);
//     })
// }
// createData({name:"Bipin",profession:"Software Engineer"}).then(getDatas).catch(err => console.log(err));



// async await 
function getDatas(){
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index) => {
            output+= `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createData(newData){
    setTimeout(() => {
        datas.push(newData);
    }, 2000);
}
async function start(){
    await createData({name:"Bipin",profession:"Software Engineer"});
    getDatas();
}
start();