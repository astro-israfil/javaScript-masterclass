const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.map(function (num) {
    return num * 2;
});

console.log(evenNumbers); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]


const jobs = ["Software Developer", "Designer", "Engineer", "Doctor", "Artist", "Software Developer", "Software Developer", "Designer", "Engineer"];

const peoples = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy"]

const employees = jobs.map(function (job, index) {
    return {
        name: peoples[index],
        job: job,
        salary: peoples[index].length * 1000
    }
});

console.log(employees);