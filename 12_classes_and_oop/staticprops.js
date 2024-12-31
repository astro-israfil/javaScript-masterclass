class User {
    constructor(username) {
        this.username = username
    }

    static createId() {
        return "12345"
    }
}

const student = new User("israfil")

// console.log(student.createId()); // static props doesn't have access


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("alyssa", "alyssa@google.com")

// console.log(teacher.createId()) // static props doesn't have access
console.log(teacher)