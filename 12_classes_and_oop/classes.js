class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return this.password + "xyz123"
    }

    changeUsername() {
        return this.username.toUpperCase()
    }
}


const user = new User("israfil", "israfil@google.com", "1234")

// console.log(user.encryptPassword())
// console.log(user.changeUsername())



//........................Behind the sceen.............................

function AnotherUser(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

AnotherUser.prototype.encryptPassword = function () {
    return this.password + "xyz123"
}

AnotherUser.prototype.changeUsername = function () {
    return this.username.toUpperCase()
}

const anotherUser = new AnotherUser("israfil_fi", "fi.israfil@google.com", "123456")

console.log(anotherUser.encryptPassword())
console.log(anotherUser.changeUsername());
