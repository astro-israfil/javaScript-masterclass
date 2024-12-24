// Example in browser environment
// console.log("In browser environment:");
// console.log(this); // In global scope, 'this' refers to the window object

// function browserFunction() {
//     console.log(this); // In a regular function, 'this' refers to the window object
// }
// browserFunction();

// const browserObject = {
//     method: function() {
//         console.log(this); // In a method, 'this' refers to the object itself
//     }
// };
// browserObject.method();

// Example in Node.js environment
console.log("In Node.js environment:");
console.log(this); // In global scope, 'this' refers to an empty object {}

function nodeFunction() {
    console.log(this); // In a regular function, 'this' refers to the global object
}
// nodeFunction();

const nodeObject = {
    method: function() {
        console.log(this); // In a method, 'this' refers to the object itself
    }
};
// nodeObject.method();


// console.log(global) // global object in Node.js
// console.log(this === exports) // true
// console.log(this === global) // false

// Arrow function
const myFunction = () => {
    console.log(this) // In a arrow function, 'this' refers to the global object
}

// myFunction() // In a arrow function, 'this' refers to the global object


const addTwoNumbers = (num1, num2) => num1 + num2

const sum = addTwoNumbers(10, 20)
// console.log(sum)

const multiplyTwoNumbers = (num1, num2) => (num1 * num2)
// console.log(multiplyTwoNumbers(10, 20))

const getUserData = () => ({name: "Israfil", email: "israfil@google.com"})
console.log(getUserData())