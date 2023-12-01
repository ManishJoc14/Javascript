// well organized code 
// easier to debug
// best for large website projects
// class is blueprint 
// object are things made by using class 
// class have properies and methods
// properties are like varibles : num1, num2
// methods are like functions   : sum(){....}

// creating class i.e blueprint
// class hello {
//     //method
//     message(){
//         console.log("Hello Everyone");
//     }
//     sorry(){
//         console.log("Sorry Everyone");
//     }
// }
// let greet = new hello(); // creating object
// let saySory = new hello(); // creating object
// greet.message(); // Hello Everyone
// saySory.sorry(); // Sorry Everyone

// there are 3 types of method
// 1. constructor : if we create object : constructor methods run automatically
// 2. prototype : they need call by object Like : message, sorry
// 3. static : they can be called without creating obj 


// class student {
//     // constructor method
//     constructor(name,age){
//         this.StudentName=name;
//         this.StudentAge=age;  
//         console.log("constructor is called");
//     }

//     // prototype method
//     hello(){
//         console.log(`Hello ${this.StudentName} . Your age is ${this.StudentAge}`);
//     }

//     //static method
//     static staticMethod(){
//         console.log("This is called without object");
//     }
// }
// let s1 = new student("Student1",19); //constructor is called
// s1.hello();//Hello Student1 . Your age is 19

// let s2 = new student("Student2",20); //constructor is called
// s2.hello();//Hello Student2 . Your age is 20

// // s1.staticMethod(); // error : because we cannot use obj to call static methods
// student.staticMethod(); //This is called without object



// Inheritance 
// class employee{
//     constructor(Name,age,salary){
//         this.empName = Name;
//         this.empAge = age;
//         this.empSal = salary;

//         console.log(`Constructor : Employee`);
//     }
//     infoEmp(){
//         console.log(`Constructor : Employee ${this.empName}`);
//     }
// }
// class manager extends employee {
//     constructor(name){
//     // always at first call parent constructor
//         super(name);//calls the parent constructor and pass name
//         console.log(`Constructor : Manager ${name}`);
//     }
//     infoMan(){
//         console.log(`Constructor : Manager ${name}`);//Constructor : Manager Manish
//         // if we want to call infoEmp() of parent we can do that through super like this
//         super.infoEmp();//Constructor : Employee Manish
//     }
// }
// let e1 = new manager("Manish",20,50000);
// e1.infoMan();//Constructor : Employee Manish
// // we can access the parent methods in child class by super


class employee{
    constructor(Name,age,salary){
        this.empName = Name;
        this.empAge = age;
        this.empSal = salary;
    }
    infoEmp(){
        document.write(`<h3> Employee Class </h3>
                     Name : ${this.empName}<br>
                     Age : ${this.empAge}<br>
                     Salary : ${this.empSal}<br>`);
    }
}
class manager extends employee { 
    infoMan(){
        let ta = 1000 ;
        let pa = 300;
        let totalSal = this.empSal + ta + pa ;
        document.write(`<h3> Manager Class </h3>
                     Name : ${this.empName}<br>
                     Age : ${this.empAge}<br>
                     Salary : ${totalSal}<br>`);
    }
}
class test extends manager {

}
let e1 = new employee("Bibek",19,60000)
let e2 = new manager("Manish",20,70000);
let e3 = new test("Dipesh",20,40000);
e1.infoEmp();
e2.infoMan();
e3.infoEmp(); // we can access employee through any derived class