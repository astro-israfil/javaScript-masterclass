const userDetail = {
    name: 'John',
    age: 25,
    email: 'john@google.com',
    country: 'USA',
    city: 'California',
    job: 'Software Developer',
    phone: '1234567890'
}

// for (const key in userDetail) {
//     console.log(key, ":", userDetail[key]);
// }



// For-in loop on array
const friends = ["John", "Peter", "Sandy", "Tom"];

// for (const friendIndex in friends) {
//     console.log(friendIndex, ":", friends[friendIndex]);
// }



// For-in loop on string
const myName = "Israfil Mallick";

// for (const charIndex in myName) {
//     console.log(charIndex, ":", myName.charAt(charIndex));
// }



// For-in loop on Map
const user = new Map();
user.set("name", "John");
user.set("age", 25);
user.set("email", "john@gmail.com");


for (const key in user) {
    console.log(key, ":", user.get(key));
}