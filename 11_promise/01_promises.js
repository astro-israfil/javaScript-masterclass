const promise1 = new Promise(function (resolve, reject) {
    // here we perform any time consuming task
    // database call, read-write in files, networks, crypto, etc.
    setTimeout(() => {
        console.log("long running task is complete 1");
    }, 1000)
});

promise1.then(() => {
    console.log("promise1 is consumed or handled well when completed")
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve()
        console.log("long running task is complete 2")
    }, 1000)
}).then(() => {
    console.log("promise 2 is consumed or handled well when completed")
})


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("long running task is complete 3")
        const response = JSON.stringify({username: "israfil", id: "424345"}) // data get affter a few moments
        resolve(response)
    }, 1000)
})

promise3.then(function (res) {
    const data = JSON.parse(res)
    return data.username
}).then((username) => console.log(username))


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({username: "israfil_fi", email: "israfil@x.com"})
        } else {
            reject("Something went wrong!")
        }
    }, 1000)
})

promise4
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("promise4 is consumed or handled well")
    })

async function consumePromise() {
    try {
        const response = await promise4
        console.log(response)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("promise4 is consumed or handled well when completed")
    }
}

// consumePromise()

fetch("https://api.github.com/users/astro-israfil")
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error.message)
    })

async function getGithubUser() {
    try {
        const response = await fetch("https://api.github.com/users/astro-israfil")
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error.message || "Somthing went wrong");
    }
}

// getGithubUser()