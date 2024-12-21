const newDate = new Date()

// console.log(newDate)
// console.log(newDate.toString())
// console.log(newDate.toDateString())
// console.log(newDate.toLocaleDateString())
// console.log(newDate.toLocaleString())
// console.log(newDate.toTimeString())

const timeStamp = Date.now()
// console.log(timeStamp)

// console.log(new Date(timeStamp).toLocaleString())


// const myDate = new Date("2023-3-1")
const myDate = new Date(2023, 0, 1, 12, 30, 11)

console.log(myDate.toString())
console.log(myDate.toLocaleString())

console.log(myDate.getMonth() + 1) // Month is started from 0 (january)
console.log(myDate.getDate()) // date is 1
console.log(myDate.getDay()) // day is started from 0 (sunday)
console.log(myDate.getTime()) // milliseconds passed from 1970 jan 1  12:00 AM this spacific date