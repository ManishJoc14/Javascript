// 1. parentNode property
// it returns the read-only parent node of a specified node or null if it does not exist.
let child = document.querySelector(".child");
// let child = document.getElementsByClassName("child")[0];

// console.log(child);
// console.log(child.parentNode);

// 2. nextElementSibling and previousElementSibling of an element
let child2 = document.querySelector(".child2");
let previousElemSibling = child2.previousElementSibling;
let nextElemSibling = child2.nextElementSibling;
// console.log(previousElemSibling, nextElemSibling);

// 3. firstChild & firstElementChild
// firstChild returns a child node which can be any node type such as an element node, a text node, or a comment node.
// firstElementChild returns first child element
const parent = document.querySelector("#parent");
let firstNode = parent.firstChild;
let firstElement = parent.firstElementChild;
// console.log("first",firstNode, firstElement);

// 4. lastChild & lastElementChild
// The lastChild property returns
// the last element node, text node, or comment node.
// If you want to select only the last child element
// with the element node type, you use the lastElementChild property.
let lastNode = parent.lastChild;
let lastElement = parent.lastElementChild;
// console.log("last",lastNode, lastElement);

// 5. childNodes(NodeList) and children(HTMLCollection)
let childnodes = parent.childNodes;
let childElements = parent.children;
// console.log(childnodes, childElements);