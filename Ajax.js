// Asynchronous Javascript and XML (AJAX)
// it is a technique for creating fast and dynamic web pages
// there are 5 stages in ready state
// 0. request not initialized
// 1. server connection established
// 2. request received
// 3. processing request
// 4. request finished and response is ready

//status 
// 200 : ok
// 403 : forbidden
// 404 : not found

// in response 
// responseText or responseXML

function loadData(){
//create obj
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        document.getElementById("demo").innerHTML= this.responseText;
    }
    else if(this.readyState==4 && this.status == 404){
        document.getElementById("demo").innerHTML= "file not found";
    }
};
// initialise request
// xhr.open("GET","readme.txt",true);
xhr.open("GET","json.txt",true);
//method
    //1.GET for unimportant data
    //2.POST for important or private data
// filename
// async mode 
  // true => request goes in background asynchronous mode
  // false => request goes in forground async mode

// send request
xhr.send();
}
//select btn
var btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    loadData();
})
