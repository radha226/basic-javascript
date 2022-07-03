// Map()
// The map() method creates a new array filled with all array elements 
// If this conditional returns true, the element gets pushed to the output array. If the condition returns false, then else part also pushed in to returned array.

//filter()
// The filter() method creates a new array filled with all array elements that pass a test implemented by the function.
// If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

// Just like map, filter passes your callback three arguments:
// the current item 
// the current index
// the array you called filter on

//Array
let xyz=["a","b","c"];
const newXYZ=xyz.filter((element)=>{
    return element=="a";
});
// console.log("newXYZ", newXYZ);

//object
let abc=[{name:"sham", age:14},{name:"raj", age:15},{name:"raj", age:19},{name:"raj", age:19}];
const newABC=abc.map((value)=>{
    return  value.name=="raj" && value.age==19;
});
console.log("newABC",newABC);