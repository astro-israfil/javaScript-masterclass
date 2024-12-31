const heros = ["spiderman", "thor"]

const heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidyPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// heroPower.israfil()

Object.prototype.israfil = function () {
    console.log("israfil is present in all object")
}

// heroPower.israfil() 
// heros.israfil()

Array.prototype.sayHi = function () {
    console.log("Israfil says hi")
}

// heros.sayHi()
// heroPower.sayHi() // not available in objects prototype



//........................INHERITANCE............................

const User = {
    isloggedIn: true,
}

const Teacher = {
    makeOnlineVideo: true,
}

const TeachingSupport = {
    isAvailable: true,
}

const TASupport = {
    makeAssignment: true,
    __proto__: TeachingSupport
}

console.log(TeachingSupport)

Teacher.__proto__ = User

Object.setPrototypeOf(TASupport, TeachingSupport)



String.prototype.trueLength = function () {
    return this.trim().length;
}

const myName = "    Israfil                "

console.log(myName.length)
console.log(myName.trueLength())