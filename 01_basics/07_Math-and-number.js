const score = 100
// console.log(typeof score) 

const balance = new Number(100000)
// console.log(balance)

// console.log(typeof balance)

const amount = 123.89543
// console.log(amount.toFixed(2))
// console.log(amount.toPrecision(2))
// console.log(amount.toExponential(5))

const coins = 145570
// console.log(coins.toLocaleString("en-IN"))


//######################## Math object in javaScript ########################

// console.log(Math)

// console.log(Math.abs(-3))
// console.log(Math.max(1, 4, 5, 2, 3))
// console.log(Math.min(1, 4, 5, 2, 3))


// console.log(Math.ceil(5.8))
// console.log(Math.ceil(5.1))
// console.log(Math.floor(5.9))
// console.log(Math.floor(5.1))

// console.log(Math.round(5.5))
// console.log(Math.round(5.4))

// console.log(Math.random())

// console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)