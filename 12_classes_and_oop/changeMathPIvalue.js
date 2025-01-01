console.log(Math.PI) // 3.141592653589793

Math.PI = 4

console.log(Math.PI)
console.log(Object.getOwnPropertyDescriptor(Math, "PI")) // { value: 4, writable: true, enumerable: false, configurable: false }

// Object.defineProperty(Math, "PI", {
//     value: 4,
//     writable: true,
//     configurable: true,
// }) // TypeError: Cannot redefine property: PI


const israfil = {
    name: "israfil",
    age: 23,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

Object.defineProperty(israfil, "name", {
    writable: false,
})


israfil.name = "unknown" // not gonna change this property value
console.log(israfil.name);


Object.defineProperty(israfil, "getDetails", {
    enumerable: false,
})

for (const [key, value] of Object.entries(israfil)) {
    console.log(key, value)
}