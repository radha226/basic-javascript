// Shallow => The newly created object has the same memory address as the old one. Hence, any change made to either of them changes the attributes for both. -->

// Array
// let xyz= ["apple","pear","banana"];
// const newXYZ=xyz;
// newXYZ.push("papaya");
// console.log("newXYZ", newXYZ);
// console.log("xyz", xyz);

// object
var abc={name:"ram", age:16};
var newABC=abc;
newABC["status"]="working";
// newABC.push({hobbies:"reading"});
console.log("abc", abc);
console.log("newABC",newABC);

// whenver a new object is created from a refrenced old object, its take a memory location as a refrence of old object. so whenever new object is modified, then old object also changed
//because of same refrence of memory address

// to overcome this problem we use deep copy

// deep copy=> in this new object copy all the member of the old object but assign a new memory location for new object, in this way both object are independent of each other and in case of any modication doest not effect the other one.
// use JSON.parse(JSON.stringify(variable name)) // for deep copy

let lmo={name:"test"};
let newLMO=JSON.parse(JSON.stringify(lmo));
newLMO["age"]=20;
console.log("lmo", lmo);
console.log("newLMO", newLMO);




