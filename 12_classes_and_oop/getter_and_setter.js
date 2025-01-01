class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    get username () {
        return this._username.toUpperCase()
    }

    set username(value) {
        this._username = value
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

}

// const user = new User("israfil", "123AbC")

// console.log("username:", user.username)
// console.log("email:", user.email)


function Subscriber(username, email) {
    this._username = username
    this._email = email

    Object.defineProperty(this, "username", {
        get: function () {
            return this._username
        },

        set: function (value) {
            this._username = value
        } 
    })
    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase()
        },

        set: function (value) {
            this._email = value
        } 
    })

}

// const subscriber = new Subscriber("israfil", "israfil@google.com")

// console.log(subscriber.email);


const Youtuber = {
    _username: "israfil",
    _email: "israfil@google.com",

    get username() {
        return this._username.toUpperCase()
    },

    set username(value) {
        this._username = value
    }

}

const youtuber = Object.create(Youtuber)
console.log(youtuber.username)