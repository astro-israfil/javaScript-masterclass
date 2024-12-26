const users = [
    { name: 'John', age: 25, isLogged: true, job: 'Software Developer' },
    { name: 'Peter', age: 30, isLogged: false, job: 'Designer' },
    { name: 'Sandy', age: 28, isLogged: true, job: 'Engineer' },
    { name: 'Tom', age: 32, isLogged: false, job: 'Doctor' },
    { name: 'Mark', age: 29, isLogged: true, job: 'Artist' },
    { name: 'Alyssa', age: 23, isLogged: true, job: 'Software Developer' },
    { name: 'Israfil', age: 22, isLogged: true, job: 'Software Developer' },
    { name: 'Lynn', age: 26, isLogged: false, job: 'Designer' },
    { name: 'Nico', age: 24, isLogged: true, job: 'Engineer' },
];


const developers = users.filter(function (user) {
    return user.job === 'Software Developer' && user.isLogged;
});

// console.log(developers);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers)