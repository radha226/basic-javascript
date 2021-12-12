// hoisting => it is phenomenon where u can access variable and function even before its declaration or initialization. you can access it without any eroor.

// // declare and initialization is same => both means assign a memory to variable and function without its value

// differnce between undefined , null and not defined.
getName();
console.log(getName);
console.log(x);
function getName(){
    console.log("hii get name");
}
var x=10;

// what when we call fun as an arrow function
// also check callstack,global execution and local execution
