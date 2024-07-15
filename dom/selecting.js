// Ways of selecting elements

// Method 1
// const element = document.getElementById(id);

// The document.getElementById() returns a DOM element specified by an id
// or null if no matching element is found.
// If multiple elements have the same id, even though it is invalid,
// the getElementById() returns the first element it encounters.
// the method matches ID case-sensitively "root" and "Root" are different

const para1 = document.getElementById("para1");
// console.log(para1);

const para1Text = para1.innerText;
// console.log(para1Text);
para1.style.border = "2px dashed purple";

// Method 2
// let elements = document.getElementsByName(name);
// returns a live NodeList of elements.
// The NodeList is an array-like object, not an array object.
const emailElements = document.getElementsByName("email");
// console.log(emailElements);

// for (let i = 0; i < emailElements.length; i++) {
//     emailElements[i].style.padding = "10px";
//     console.log(emailElements[i]);
// }

// for(let emialInputElement of emailElements){
//     emialInputElement.style.padding = "10px";
//     console.log(emialInputElement);
// }

const emailElementsArray = Array.from(emailElements);
// console.log(emailElementsArray)

// Method 3
// let elements = document.getElementsByTagName(tagName);
// it returns HTMLCollection(it is an array-like object)
const allH2Elements = document.getElementsByTagName("h2");
// console.log(allH2Elements);
// for(let i = 0; i < allH2Elements.length; i++){
//     console.log(allH2Elements[i]);
// }

// for(let h2 of allH2Elements){
//     console.log(h2);
// }
// console.log(allH2Elements);
const allH2ElementsArray = Array.from(allH2Elements);
// console.log(allH2ElementsArray)

// Method 4
// returns HTMLCollection
// it will search the entire document
// let elements = document.getElementsByClassName(names);

// it will search inside that particular Element
// let elements = Element.getElementsByClassName(names);

const menu = document.getElementById("menu");
// console.log(menu);
const items = menu.getElementsByClassName("item");
// console.log(items);
const arrayOfItems = Array.from(items);
const texts = arrayOfItems.map((item) => item.innerText);
// console.log(texts);

// Method 5
// it returns first element that matches the given CSS selectors.
// returns null if not found
// let element = parentNode.querySelector(selector);

let query = document.querySelector("#query");
// console.log(query);
const text1 = document.querySelector(".container .text");
// console.log(text1);

// Methood 6
// querySelectorAll returns a static(non-live) NodeList.
let elements = document.querySelectorAll('div, p');
// console.log(elements);








const staticTexts = document.querySelectorAll(".container .text");
const liveTexts = document.getElementsByClassName("text");

// console.log("old", staticTexts);
// console.log("old", liveTexts);

const newText = document.createElement("p");
newText.innerText = "Text5";
newText.classList.add("text");
document.querySelector(".container").appendChild(newText);
// console.log("new", staticTexts);
// console.log("new", liveTexts);



// Differences

// NodeList: Can contain any type of node (element nodes, text nodes, comment nodes tec.).
// HTMLCollection: Contains only HTML elements.
// Array: Can contain any type of data (numbers, strings, objects, etc.).

// NodeList: Iterable using forEach, for-of and index-based loops.
// HTMLCollection: Iterable using index-based loops, for-of. Must be converted to an array for forEach.
// Array: Iterable using forEach, for-of, map, filter, and index-based loops.

// NodeList: Can be live or static.
// HTMLCollection: Always live.
// Array: Always static.
