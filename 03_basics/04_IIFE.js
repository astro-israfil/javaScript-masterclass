// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed immediately after it is created.
// It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// Syntax:
// (function() {
//     // code
// })();

// Example:
(function() {
    console.log("Hello from IIFE")
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello ${name}`)
})("Israfil");

// IIFE with return value
const sum = (function(a, b) {
    return a + b
})(10, 20);

console.log(sum);

// IIFE with arrow function
(() => {
    console.log("Hello from IIFE with arrow function")
})();