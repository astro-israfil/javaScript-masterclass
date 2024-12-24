// const tinderUser = new Object()

const tinderUser = {}
// console.log(tinderUser)

tinderUser.id = 1323
tinderUser.name = "israfil"
tinderUser.age = 22
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const user = {
    fullName: {
        userFullName: {
            firstName: "Israfil",
            lastName: "Mallick",
        },
    },
    email: "im.israfil@gmail.com",
    age: 22,
    isLoggedIn: false,
}

console.log(user.fullName.userFullName.firstName)

const user1 = {name: "israfil", email: "israfil@google.com"}
const userStatus = {isLoggedIn: false, lastLogin: "saturday"}

// marge two objects
const newUser = Object.assign({}, user1, userStatus)
// console.log(newUser)


// spread operator
const anotherNewUser = {...user1, ...userStatus}
// console.log(anotherNewUser)


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty("isLoggedIn"))
console.log(tinderUser.hasOwnProperty("isLoggedOut"))