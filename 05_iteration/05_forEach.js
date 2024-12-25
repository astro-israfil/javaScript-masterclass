const friends = ['nico', 'lynn', 'dal', 'mark'];

// friends.forEach(function (friend) {
//     console.log(friend);
// });

// forEach on map
const myMap = new Map();
myMap.set('name', 'Israfil');
myMap.set('age', 22);
myMap.set('country', 'Bangladesh');

// myMap.forEach(function (value, key) {
//     console.log(key, ':', value);
// });


const usersData = [
    {
        name: 'John',
        age: 25,
        email: 'john@google.com',
        country: 'USA',
    },
    {
        name: 'Peter',
        age: 30,
        email: 'peter@google.com',
        country: 'UK',
    },
    {
        name: 'Sandy',
        age: 28,
        email: 'sandy@google.com',
        country: 'Australia',
    }
]


usersData.forEach((user) => {
    console.log(user.name, user.age, user.email, user.country);
})