var c = 35 // here is an issue with the variable decalared with var keyword in the global scope
// it doesn't have block scope, so it can be accessed from anywhere in the code

let a = 5
const b = 15

if (true) {
    let a = 10 // it creates a new variable a in the block scope
    const b = 20 // it creates a new variable b in the block scope

    console.log("block a:", a) // 10
    console.log("block b:", b) // 20

    var c = 30 // it changes the value of the global variable c
}

// console.log("global a:",a)
// console.log("global b:", b)
// console.log(c) // 30




function one() {
    const username = "Israfil"

    function two() {
        const website = "israfil.com"
        console.log(username)
    }

    // console.log(website) // ReferenceError: website is not defined
    two()
}

// one()


// if (true) {
//     const name = "Israfil"
//     if (name === "Israfil") {
//         const age = 22
//         console.log(`My name is ${name} and I am ${age} years old`)
//     }

//     // console.log(age) // ReferenceError: age is not defined
// }

// console.log(name)



/////////////////////////// HOISTING ///////////////////////////

// myFunction1()

// function myFunction1() {
//     console.log("Hello from myFunction1")
// }

// myFunction2()
// const myFunction2 = function() {
//     console.log("Hello from myFunction2")
// }