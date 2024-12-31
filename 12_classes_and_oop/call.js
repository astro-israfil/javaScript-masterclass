function setUsername(username) {
    this.username = username
}


function createUser(username, email, password) {
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const user = new createUser("israfil", "israfil@gmail.com", "2334")

console.log(user)