// restoperator(...) takes rest of arguments and makes array of it 
// so we can easily access them

// Normal way of adding numbers
function sum(num1, num2){
    console.log(num1+num2);
}
sum(2,3);
sum(2,3,4);//function only takes two arguments
//  another normal way of doing it 
function add(){
   var sum=0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    console.log(sum);//20
    // console.log(arguments);
}
add(2,3,4,5,6); //it works fine
add("manish",2,3,4,5) //0manish2345
// But the problem arises when the other arguments are not numbers 
// so for this problem rest operator come in play 
// by usig rest operator
function addition(name,...arg){ //rest operators must be used as last argument
    var sum=0; //rest operator converts the rest arguments into array arg
    for(let i in arg){
        sum+=arg[i];
    }
    console.log(`${name}: your sum is ${sum}`);
    console.log(arguments);
}
addition("manish",2,3,4,5); // Manish your sum is 14
addition("manish",2,3,4,5,10,20); // Manish your sum is 44

