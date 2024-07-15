let box = document.querySelector(".box");
// console.log(box);

box.style.border = "10px solid red";

// border + padding + content width
let offset_width = box.offsetWidth;
let offset_height = box.offsetHeight;
// console.log({offset_width, offset_height});

// padding + content width
let client_width = box.clientWidth;
let client_height = box.clientHeight;

// console.log({client_width, client_height});

// with floating points =>  border + padding + content width
let { width: fullwidth, height: fullheight } = box.getBoundingClientRect();
// console.log({fullwidth, fullheight});



// only after reading events 
{/* <div id="track"></div> */}
// let track = document.querySelector("#track");
// track.addEventListener("mousemove", (e) => {
//   let log = document.querySelector("#log");
//   log.innerText = `
//             Screen X/Y: (${e.screenX}, ${e.screenY})
//             Client X/Y: (${e.clientX}, ${e.clientY})`;
// });

// screenX and screenY
// in relation to the entire screen at which
// the mouse event occurred:

// clientX and clientY
// within the application’s client area at which
// the mouse event occurred:
