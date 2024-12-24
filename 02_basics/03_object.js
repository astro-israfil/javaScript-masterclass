const user = {
    name: "Israfil",
    email: "israfil@google.com",
    age: 22,
    isLoggedIn: false,
    lastLoggedIn: ["stureday", "sunday"],
}

// console.log(user.name)
// console.log(user["age"])



const uniqueId = Symbol("mykey123")

const user1 = {
    name: "israfil mallick",
    [uniqueId]: "234343",
    age: 22,
    email: "im.israfil@soft.com"
}

// Object.freeze(user1)

user1.isLoggedIn = true
user1.email = "im.israfil@amazon.com"

// console.log(user1[uniqueId])
// console.log(user1)

user1.greeting = function () {
    console.log("Hello world !!!")
}

// console.log(user1.greeting)
user1.greeting()

user1.greetingTwo = function () {
    console.log(`Hello user: ${this.name}`)
}

user1.greetingTwo()