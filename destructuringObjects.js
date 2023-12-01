// Destructuring objects new way
var user = {
    name : "Manish",
    age : 19,
    city : "Belauri"
}
var {name,age,city} = user; 
// note:- varible name should be same as property name
// console.log(name,age,city);//Manish 19 Belauri

//incase we only want name or city we can omit them 
var {name,city} = user; 
console.log(name,city);//Manish Belauri

// incase we want different varible name 
var {name : StudetName, age : Age, city : Address} = user ;
console.log(StudetName);//Manish
