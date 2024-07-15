// -------------------------------------------------
// never use getAttribute and setAttribute on style
// -------------------------------------------------

// inline
let email1 = document.querySelector("#email1");
let inlineStyles = email1.getAttribute("style");
// console.log(inlineStyles);
email1.setAttribute("style", "border : 2px solid red;");
email1.style.padding = "20px";
email1.style.color =  "white";
// console.log(email1.style);



// only returns all styles
// To get all styles applied to an element, 
// you should use the getComputedStyle() method.
let allStyles = getComputedStyle(email1);
// console.log(allStyles);



// returns the live collection of CSS classes of the element.
// ------------classList------------------
// const classes = element.classList;
// let p = document.querySelector('#para');

// ------------add------------------
// p.classList.add('info');
// p.classList.add('info','visible','block');

// ------------remove------------------
// p.classList.remove('visible');
// p.classList.remove('block','red');

// ------------replace------------------
// p.classList.replace('info','warning');

// ------------contains------------------
// p.classList.contains('warning'); // true

// ------------toggle------------------
// p.classList.toggle('visible');


let elem = document.querySelector("#toggleMode");
elem.addEventListener("click", function(){
    document.body.style.background = "black";
    document.body.style.color = "white";
});
