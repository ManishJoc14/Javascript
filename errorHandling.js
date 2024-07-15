//blabla;//Uncaught ReferenceError: blabla is not defined

// try {
//     console.log("Start of try"); //Start of try
//     blabla; // by this   Error has occured,  ReferenceError: blabla is not defined at errorHandling.js:5:5
//     console.log("End of try");
// } catch (error) {
//     console.log("Error has occured");
//     console.log(error);
//     //we have three methods
//     console.log(error.name);//ReferenceError
//     console.log(error.message);//blabla is not defined
//     console.log(error.stack);//ReferenceError: blabla is not defined at errorHandling.js:5:5
// }
//types of error
/*
1. eval error
2. range error
3. reference error
4. syntax error
5. type error
6. uri error
7. aggregate error
*/

// try {
//     let json =' {"name":"manish","age":20} ';
//     let user = JSON.parse(json);
//     if (!user.roll) {
//         throw new Error("Incomplete data : No Roll");
//     }
//     console.log(user.name);
// } catch (error) {
//     console.log("type : ",error.type);
//     console.log("message : ",error.message);
// }finally{
//     console.log("finally");
// }


function calculateSquareRoot(num){
    if(num < 0){
        throw new Error("cannot calculate square root of -ve numbers for now");
    }else{
        return Math.sqrt(num);
    }
}

try{
    console.log(calculateSquareRoot(-20));
}catch(err){
    console.log(err.message);
}