// There are two ways to attach an event handler to an element:
// 1.Inline event handlers

function handleClick() {
  console.log("Btn Clicked!");
}
{
  /* <input type="button" value="Save" onclick="handleClick()"> */
}

// 2.Event listeners
let btn = document.querySelector('#btn');

// not preffered
btn.onclick = function () {
  console.log("Clicked!");
};

// preffered way
btn.addEventListener("click", function (event) {
  console.log(event.type); // click
  console.log(btn);
  console.log(this) // element which received event // btn
  console.log(this.id);
});

btn.removeEventListener("click", function (event) {
  // console.log(event.type); // click
});


document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
});

document.addEventListener('load',() => {
    // handle load event
});

document.addEventListener('beforeunload',() => {
    // handle beforeunload event
});

document.addEventListener('unload',() => {
    // handle unload event
});
