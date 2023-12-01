// with fetch() it is a lot faster 
// we can do :
//insert , update , read , delete

//syntax
// fetch(file/url);
// it returns promise 
// then we use then() it also returns promise then again we have to use then()

// fetch(file/url)
//.then(response=>response.data})
//.then(result=>console.log(result)})
//.catch(error=>console.log(error) });


// reading simple txt file
// fetch("readme.txt")
// .then(response=> response.text())
// .then(data=>console.log(data));

// reading json file
// fetch("json.txt")
// .then(response=> response.json())
// .then(data=>console.log(data))
// .catch(err => console.log("cant fetch data"));

// fetch("json.txt")
// .then(response=> response.json())
// .then(data=>{
//     for(var x in data){
//         console.log(`Name: ${data[x].user}, City: ${data[x].address.city} `);
//     }
// })
// .catch(err => console.log("cant fetch data"));



// fetch("json.txt",{
//     method:"POST",   // PUT, DELETE, GET
//     // to insert : post 
//     // to update : put
//     // to delete : delete 
//     // default method get : to fetch 

//     body : data, // form data / json data / text data

//     headers : {
//         'Content-Type':'application/json', // for json data
//         // 'Content-Type':'application/x-www-form-urlencoded',// for form data
//     }
// });
var obj = {
     title : "foo",
     body : "bar",
     userId : 1
}
fetch("json.json/POST",{
    method:"POST",
    body : JSON.stringify(obj), 
    headers : {
        'Content-Type':'application/json'
    },
}).then(response=> response.json())
.then(data=>console.log(data))
.catch(err => console.log("cant fetch data"));