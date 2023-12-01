// let counter = createCounter();
// let counter1 = createCounter();
        // factory function
//     function createCounter(){
//       return {
//          count : 0,
//          increment : function () {
//          this.count++;
            // this inside a object refers to that obj
//          }
//        }
//     }
// counter.increment();
// counter1.increment();
// console.log(counter1);


// var count = 0;
// function incrementCounter(){
//     this.count++;
//     console.log(this);//window
//     // this inside a regular function refers to window obj

// }
// incrementCounter();
// console.log(count);


// // constructor function
// function Car (name){
//     this.name=name;
//     this.start=function(){
//         console.log(this.name + 'started');
//     }
// }
// let swift = new Car('swift'); //new creates a new obj
// //and so this refers to car obj
// swift.start();//swift started



var btn = document.getElementById("btn");
btn.addEventListener('click',function(){
// we have to use regular function since this in a (regular function)refers
// to the (window obj) or ( obj that called the function )
// here btn called the function,
// so this represents btn and it will be similar to 
// btn.style.backgroundColor = "red";
    this.style.backgroundColor = "red";
// if we have used (arrow function) bgcolor won't change because
// this in an arrow function refers to  (the obj that owns it)
// here window owns the button and so, this refers window
// it will be window.style.backgroundColor = "red";
})
// to change bgcolor using arrow function
btn.addEventListener('click',function(){
    change = () => this.style.backgroundColor = "red";
    //inside an arrow func, this refers to the obj that owns it 
    //since func is owned by btn, this represenst btn not the window
})