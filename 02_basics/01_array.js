const myArray = [0, 1, 2, 3, 4, 5]

// console.log(myArray[0])
// console.log(myArray.length)


const string = myArray.join(" || ")
// console.log(string)

// myArray.push(6)
// myArray.pop()
// myArray.unshift(9)
// myArray.shift()

// console.log(myArray)


// console.log(myArray.includes(3))
// console.log(myArray.indexOf(3))

const mySlice = myArray.slice(1, 3)
console.log("mySlice:", mySlice)
console.log("myArray:", myArray)


const mySplice = myArray.splice(1, 3)
console.log("mySplice:", mySplice)
console.log("myArray:", myArray)