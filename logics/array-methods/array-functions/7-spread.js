// spread: it is used to spread out an array.
// 6 Use Case of Spread with Array in JavaScript
// Merge Array
// [...array1, ...array2]

// // Clone Array
// [...array]

// // String → Array
// [...'string']

// // Set  → Array
// [...new Set([1,2,3])]

// // Node List → Array
// [...nodeList]

// // Arguments → Array
// [...arguments]

// 1) Merge Array
let a=[1,2,3];
let b=[5,6,7];
let c=[...a,...b];
// console.log("c",c);


// 2) copying or clone an array
let d=[8,9,10];
let e=d;
e.push(11);
// console.log("e",e,"d",d)
// here when we push 11 to e array then d array is also refected bec it has same refrence
// to avoid this we use spread 

let original=[11,23];
let newArray=[...original];
newArray.push(25);
// console.log("newArray", newArray);
// console.log("original", original);
//here only new created array is change original remain unchanged
