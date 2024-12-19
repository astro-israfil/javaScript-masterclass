const myName = "Israfil"
const myGithubRepoCount = 50

// console.log("Hey welcome to my portfolio" + " I am " + myName + ", " + "I have " + myGithubRepoCount + " repositories in github.");

// string interpolation
// console.log(`Hey there, I am ${myName}, I have ${myGithubRepoCount} repositories in github.`);


const programmingLang = new String("JavaScript")
// console.log(programmingLang[4])

// console.log(programmingLang.length)

// console.log(programmingLang.__proto__);

// console.log(programmingLang.charAt(4))
// console.log(programmingLang.charCodeAt(4))
// console.log(programmingLang.includes("Script"))
// console.log(programmingLang.includes("Py"))
// console.log(programmingLang.indexOf("S"));

// const myString = "The quick brown fox jumps over the lazy dog."
// console.log(myString.slice(31))

// console.log(myString.slice(4, 19))

// console.log(myString.slice(-4))

const myString2 = "mozilla"

// console.log(myString2.substring(1, 3))
// console.log(myString2.substring(2))

const city = "istanbul"
// console.log(city.toUpperCase())

// console.log(city.toLocaleUpperCase("en-US"))
// console.log(city.toLocaleUpperCase("TR"));

const dotted = "İstanbul"
// console.log(dotted.toLocaleLowerCase('tr'))
// console.log(dotted.toLocaleLowerCase("en-US"))
// console.log(dotted.toLowerCase())


const user1 = "admin Israfil"

// console.log(user1.startsWith("admin"))

const file = "awesomeNaturePicture.png"

// console.log(file.endsWith(".png")) // true
// console.log(file.endsWith(".jpg")) // false

const myFullName = "Israfil Mallick"

const firstNameAndLastName = myFullName.split(" ")
// console.log(firstNameAndLastName)


const url = "https://israfil.com/isafil%20im"

// console.log(url.replace("%20", "-"))


const mood = "Happy! "
console.log(`I feel ${mood.repeat(3)}`)


const username = "     israfil_im         "

console.log(username.trimStart())
console.log(username.trimEnd())
console.log(username.trim())


const str1 = "Breaded Mushroom"

console.log(str1.padEnd(25, "."))

const score = "5"

console.log(score.padStart(3, "0"))


const paragraph = "I think Ruth's dog is cuter than your dog"

console.log(paragraph.lastIndexOf("dog"))