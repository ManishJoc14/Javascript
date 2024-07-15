//let us see a example of object literal
let name = "Manish";
let course = "Electronics";
var obj1 = {
    name : name,
    course : course
// here we see key pair obj are same we can write it once in Es6 version
};
console.log(obj1);
var obj2 = {
    name,
    course
}
console.log(obj2);


// another example of object literal
var n = "name";
var c = "course"
var obj3 = {
    // we can access the value of variable and use them as key
    [n] : "Bibek", // same as name : "Bibek"
    [c] : "Electronics"
}
console.log(obj3);

// we can compute that value too in property name lets see
var n = "name";
var c = "course"
var obj4 = {
    // we can access the value of variable and use them as key
    [`Student${n}`]: "Bibek", // same as Studentname : "Bibek"
    [`Student${c}`]: "Electronics", 
    
}
console.log(obj4);

// we can use them in methods too lets see
var n = "name";
var c = "course"
var obj5 = {
    // we can access the value of variable and use them as key
    [`Student${n}`]: "Bibek", // same as Studentname : "Bibek"
    [`Student${c}`]: "Electronics", 
    // details : function (){
    //     return `${this.Studentname} is a student of ${this.Studentcourse}`;
    // }
    // in new versions we can remove :function
    // which will look like this
    details(){
        return `${this.Studentname} is a student of ${this.Studentcourse}`;
    }
}
console.log(obj5);
console.log(obj5.details()); //Bibek is a student of Electronics
