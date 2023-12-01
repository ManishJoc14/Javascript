//   old way of assigning values of array to variables 
// let user = ["manish", 19,"belauri"];
// let name = user[0];
// let age = user[1];
// let address = user[2];
// console.log(name);  // manish

// this was a lengthy process so in new versions 
// we do like this
// let [Name,Age,Address]=user;
// console.log(Name);  // manish
// console.log(Address);  // belauri

// we can set default values of varibles too
// let [Name,Age=18,Address]=user;
// console.log(Age);  
// 19 . if user didn't set age,  default age will be 18 

// lets use this in an advance way in nested arrays
// let emp = ["manish",19,"belauri",["male",50000]];
// let [name,age,city,[gender,salary]]=emp;
// console.log(salary);
// console.log(city);

// in functions 
// let user = ["manish", 19,"belauri"];
// function emp ([Name,Age,Address]){
//     console.log(Age);
// }
// emp(user);

// another way
// function emp (){
//     return ["manish", 19,"belauri"]
// }
// let [Name,Age,Address] = emp();
// console.log(Address);
