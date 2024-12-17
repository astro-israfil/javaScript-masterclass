let score = " 0 12"

let valueInNumber = Number(score)

// console.log(valueInNumber)
// console.log(typeof valueInNumber)

// conversion
// "33" => 33
// "33abc" => NaN
// "" => 0
// " " => 0
// null => 0
// undefined => NaN
// true => 1; false => 0

const isLoggedIn = undefined
const booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false; " " => true
// null => false 
// undefined => false

const status = undefined
const statusInString = String(status)

// console.log(statusInString)
// console.log(typeof statusInString)


//####################### Operations #########################

// const a = 20;
// const b = 10;

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a ** b)
// console.log(a / b)
// console.log(a % b)

// const firstName = "Israfil"
// const lastName = " Mallick"

// const fullName = firstName + lastName
// console.log(fullName)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true) // 1
console.log(+"") // 0


// prefix and postfix


let x = 3;
const y = x++; // asign the value before the increment

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // asign the value after the increment

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"