class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}


class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    makeACourse() {
        console.log("Making a javaScript course")
    }
}

const people = new Teacher("israfil", "israfil@google.com", "1234")
const people1 = new User("alyssa")

// console.log(people)
people.makeACourse()
people.logMe()