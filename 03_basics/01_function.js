function logMyName() {
    console.log("Israfil")
}

// logMyName()

function logFullName(firstName, lastName) {
    console.log(firstName, lastName)
}

// logFullName("Israfil", "Mallick")


function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2)
    if (num1 === undefined || num2 === undefined) {
        return "Please provide two numbers"
    }
    return num1 + num2
}

const sum = addTwoNumbers(10, 20)
// console.log(sum)


// default parameters
function showLoggedInMessage(username = "Guest") {
    console.log(`Welcome back ${username}`)
}

// showLoggedInMessage()


// rest parameters
function calculateCartTotal(...cartPrices) {
    return cartPrices // [10, 20, 30]
}

const total = calculateCartTotal(10, 20, 30)
// console.log(total)



function calculateCartTotal1(discount, ...cartPrices) {
    return {discount, cartPrices}
}

const total1 = calculateCartTotal1(10, 20, 30)
// console.log(total1)


function handleObject({name, email}) {
    console.log(`username: ${name}, email: ${email}`)
}

const user = {name: "Israfil", email: "israfil@google.com"}
// handleObject(user)
// handleObject({name: "John", email: "john@google.com"})



function handleArray([first, ...rest]) {
    console.log(`the first item is ${first} and the rest are ${rest} of the array`)
}

const numbers = [10, 20, 30, 40]
handleArray(numbers)