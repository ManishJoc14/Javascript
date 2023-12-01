localStorage.setItem("name","manish");
console.log(localStorage.getItem("name"));//manish
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));//null
localStorage.setItem("name","manish");
localStorage.clear();
console.log(localStorage.getItem("name"));//null
localStorage.setItem("name","manish");
console.log(localStorage.length);//1
localStorage.setItem("age","20"); //must ensure to use strings 
console.log(localStorage.key(1));//age
