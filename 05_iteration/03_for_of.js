const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
//   console.log(num);
}


const myName = "Israfil Mallick";

for (const char of myName) {
//   console.log(char);
}


////////////////////////// Map //////////////////////////

const myMap = new Map();
myMap.set("name", "Israfil");
myMap.set("age", 22);
myMap.set("country", "Bangladesh");

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("country"));
// console.log(myMap.get("country"));


for (const [key, value] of myMap) {
  console.log(key, ":", value);
}


const user = {
    name: "Israfil",
    age: 22,
    country: "Bangladesh"
}

// for (const key of user) { // TypeError: user is not iterable
//     console.log(key, ":", user[key]);
// }