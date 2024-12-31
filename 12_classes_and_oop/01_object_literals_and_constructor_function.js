const user1 = {
    firstName: "Israfil",
    lastName: "Mallick",
    isLoggedIn: false,
    age: 22,


    getUserDetails: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

user1.getUserDetails()


function User(username, email) {
    this.username = username
    this.email = email
    // return this
}

const user2 = new User("imisr", "imisr@gmail.com")

const user3 = new User("israfil", "israfil@gmail.com")

console.log(user2)


// https://chatgpt.com/share/6773b1bf-eb34-8004-9ac4-aecb0f7b1922