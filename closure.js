// //closures give access to an outer function from inner function
// let a = () => {
//     let grandpa = "Jay";
//     let b = () => {
//         let papa = "Laxman";
//             //but we cannot access properties/varibles of child in parent function
//             //console.log(`${papa} has a son named ${son}`);//Uncaught ReferenceError: son is not defined
//         let c = () => {
//             let son = "manish";
//             //we can access properties/varibles from parent function in child function
//             console.log(`${son} is a son of ${papa} is a son of ${grandpa}`);
//         }
//         c();
//     }
//     b();
// }
// a();

function outer() {
  let firstName = "Manish";

  function inner() {
    let middleName = " Datt";

    function moreInner() {
      let lastName = " Joshi";
      let fullName = firstName + middleName + lastName;
      console.log(fullName);
    }
    moreInner();
  }
  inner();
}

outer();
