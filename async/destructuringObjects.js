// Destructuring objects new way
var user = {
    Pname : "Manish",
    age : 19,
    city : "Belauri"
}
var {Pname,age,city} = user; 
// note:- varible name should be same as property name
// console.log(name,age,city);//Manish 19 Belauri

//incase we only want name or city we can omit them 
var {Pname,city} = user; 
var newObj={Pname, city};
console.log(newObj);
// console.log(name,city);//Manish Belauri

// incase we want different varible name 
var {Pname : StudetName, age : Age, city : Address} = user ;
// console.log(StudetName);//Manish
