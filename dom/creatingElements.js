// create a html element
// let element = document.createElement(htmlTag);
// as name says "createElement"
// so it can only create a element node(p, div, .....)

// to create other types of node we have other methods
// like document.createComment("comment");
// createTextNode("dummy textnode"); etc

// we only use createElement
let newDiv = document.createElement("div");
newDiv.id = "divElement";
newDiv.className = "division";
newDiv.innerHTML = "<p> P inside div(created just now) </p>";
document.body.appendChild(newDiv);
// appendChild appends any type of node

let text = document.createTextNode("CreateElement example");
let comment = document.createComment("comment node created");
newDiv.appendChild(text);
newDiv.appendChild(comment);
// appendChild appends any type of node

// console.log(document.querySelector("#divElement"));

let ul = document.createElement("ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li1.textContent = "Products";
li2.textContent = "About Us";
li3.textContent = "Blog";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);

// using fragments
let languages = ["JS", "TypeScript", "Dart", "Nodejs"];

let langList = document.createElement("ul");

// let fragment = new DocumentFragment();
let fragment = document.createDocumentFragment();
languages.forEach((language) => {
  let li = document.createElement("li");
  li.innerHTML = language;
  fragment.appendChild(li);
});

langList.appendChild(fragment);
document.body.appendChild(langList);

let p = document.querySelector("#insert");
// console.log(p);
// create a new h1 element
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
h1.innerText = "JavaScript DOM - before()";
h3.innerText = "JavaScript DOM - after()";

// insert the h1 before the paragraph
p.before(h1);
p.after(h3);
// before() to insert a node before an element
// after() to insert a node after an element

// create a new node
let li = document.createElement("li");
li.textContent = "HTMl new";
li.className = "item";

// replace the first list item
menu.replaceChild(li, menu.firstElementChild);
menu.removeChild(menu.lastElementChild);

// Use the node.cloneNode() method to clone the node.
// Pass true into the cloneNode() method to create a deep clone of a DOM element.
let clonedMenu = menu.cloneNode(true);
clonedMenu.id = "menu-mobile";
menu.after(clonedMenu);



// Differences	       append()	                      appendChild()
// Return value	       undefined	                    The appended Node object
// Input	Multiple     Node Objects 	                A single Node object
// Parameter Types	   Accept Node(s) and DOMString	  Only Node


let app = document.querySelector('#app');
app.prepend('append() Text Demo');   // DOMString

let langs = ['Nepali','English','Doteli'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

app.append(...nodes); // Nodes
// app.prepend(...nodes);
// prepend method inserts before the first child of a parent node.
// console.log(app.innerHTML);