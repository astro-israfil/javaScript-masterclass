const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]

// numbers1.push(numbers2)
// console.log(numbers1[3][1])

// const numbers3 = numbers1.concat(numbers2)
// console.log(numbers3)

// spreading two arrays
const numbers3 = [...numbers1, ...numbers2]
console.log(numbers3)


const nestedArray = [1, 2, 3, 4, [5, [6, 7]]]
// console.log(nestedArray[4][1][1])

const flatedArray = nestedArray.flat(2)
// console.log(flatedArray[6])

const myName = "israfil"
// console.log(Array.isArray(myName))

const charsArray = Array.from(myName)
// console.log(charsArray)


const score1 = 100
const score2 = 200
const score3 = 300

const scores = Array.of(score1, score2, score3)

// console.log(scores)