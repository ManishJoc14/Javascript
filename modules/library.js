export default function myfunc(){ //default function
    console.log("hello defaut");
 }
let message = "ES6 MODULES";

function user(name){
   return `Hello ${name}`;
}

class test{
    constructor(){
        console.log("Constructor Method");
    }
}
export {myfunc,message,user,test};