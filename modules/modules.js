// if we have 2 js files 
//  and we like some specific variables or functions to use from 1file to another file
// in this case we have to use modules
// modules have to funcs import and export

// file1
export let name = "Manish"; // export
export function hello(){
}
export class user{
}

 // file2
import {name} from './file1'; // import and use relative path :- ./foldername/filename
console.log(name); 

import {hello} from '.file1';
hello();

import {user} from '.file1';
let newUser = new user();

// import all in one line
import {name,hello,user} from '.file1';

// in script tag for file2 use relative path and type 
// <script type="module" src"./file2.js> </script>

//Note:- Modules works with live servers