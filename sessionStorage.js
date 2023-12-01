//used less than local storage
//it is for only one session i.e it works only in one tab
sessionStorage.setItem("name","manish");
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.length);
// sessionStorage.removeItem("name");
// sessionStorage.clear();

//storage events
window.onstorage = (e)=>{
    alert("changed");
    console.log(e);
}