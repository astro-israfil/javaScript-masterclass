// Data types in javaScript programming language
// Primarily in javaScript we could classify data based on how the data is stored in memory.
// In the javaScript engine there are two types of memory 1. Stack memory 2. Heap memory.
// There for in javaScript, datas are primarily destinguished in two types 1. Primitive 2. Non-Primitive

// Primitives are of 7 types:
// 1. number
// 2. string
// 3. bigint
// 4. boolean
// 5. null
// 6. undefined
// 7. symbol

// Non-Primitives are of 3 types:
// 1. array
// 2. object
// 3. function


// Some primitive data types example:
let score1 = 30
let score2 = score1

score2 = 10
console.log(score2)
console.log(score1)

// Some Non-Primitive data types example:
// Here is the variable is getting memory address reference so
// when we assigning one variables value to another, there is both variables getting the same memory address
// referenece so changing one variable properties reflected to another.

let person1 = {
    name: "Smith",
    age: 30,
}

let person2 = person1
person2.name = "John"

console.log(person2)
console.log(person1)