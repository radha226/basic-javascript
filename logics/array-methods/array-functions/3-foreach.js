// forEach() :
// return value : undefined
// originalArray : not modified after the method call
// newArray is not created after the end of method call.

// map() :
// return value : new Array populated with the results of calling a provided function on every element in the calling array
// originalArray : not modified after the method call
// newArray is created after the end of method call.
// The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.
// That's something you can't do with forEach() because, as you might guess, it returns undefined.



// string
const abc=["a","b","c"];
const newABC=abc.forEach(element => {
    console.log("element",element);
    return element;
});
//here return is undefined
// does not return a new array
// console.log("newABC1", newABC);
// console.log("newABC2", abc);

//array of object
const xyz=[{name:"ram",age:18},{name:"sham",age:20}];
const newXYZ=xyz.forEach(element => {
    return element.name
});
console.log("newXYZ",newXYZ );