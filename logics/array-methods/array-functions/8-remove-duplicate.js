// Array of strings
let processName=["admintrator", "admintrator","admintrator","admintrator","leapmax"];
let newProcessName=[...new Set(processName)];
// console.log("newProcessName", newProcessName);
// console.log("prev",processName);

// Array of objects
let arrayOfObject=[{name:"administrator"},{name:"administrator"},{name:"administrator"},{name:"leapmax"}];
let newArrayOfObject= [...new Set(arrayOfObject.map((item) =>{
 return item.name;
}))];
console.log("newArrayOf object", newArrayOfObject);
console.log("original object", arrayOfObject);
