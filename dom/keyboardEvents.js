let emailWithID = document.querySelector("#email1");

// fired before change is made to the text box
emailWithID.addEventListener("keydown", function(e){
    // console.log("keydown",e.key)
});

// fired before change is made to the text box
emailWithID.addEventListener("keypress", function(e){
    // console.log("keypress",e.key)
    // console.log(this.value);
});

// fired after change is made to the text box
emailWithID.addEventListener("keyup", function(e){
    // console.log("keyup",e.key);
});
