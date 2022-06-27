// reduce
// map creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong. reduce, on the other hand, takes all of the elements in an array and reduces them into a single value.

// reduce passes your callback four arguments:
// accumalator value 
// current value 
// the current index
// the array you called reduce on
//initiale value

// acc and current value is not optional.
//where we can use reduce


//for sumup
const array = [1, 2, 3, 4];
const newArray=array.reduce((acc, val)=>{
   return acc+val;
},0);
// console.log("newArray: " + newArray)

const obj = [{name:'iphone', price:2000},{name:'samsung', price:4000}];
const newObj=obj.reduce((acc, val)=>{
    return acc+val.price
},10);
// console.log("newObj: " + newObj);



//flattern an array 
const arrayFlattern=[['a','b'],['c','d'],['e','f']];
const newArrayFlattern=arrayFlattern.reduce((acc,val)=>{
    return acc.concat(val);
})

console.log("newArrayFlattern",newArrayFlattern);

//Grouping objects by a property

//Counting instances of values in an object

//Remove duplicate items in an array



// Replace .filter().map() with .reduce()
// Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect while traversing only once with Array.reduce()

// https://code.tutsplus.com/articles/5-real-life-uses-for-the-javascript-reduce-method--cms-39096