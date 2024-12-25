// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log("Priting the table of", i);

//     for (let j = 1; j <= 10; j++) {
//         console.log(i, "x", j, "=", i * j);
//     }
// }

const libraries = ["React", "Angular", "Vue", "Svelte"];

// for (let i = 0; i < libraries.length; i++) {
//     if (libraries[i] === "React") {
//         console.log("The index of React is ", i);
//     }
//     console.log(libraries[i]);
// }


// break and continue

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("We got the number 5");
        break;
    }
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("We got the number 5, skipping it");
        continue;
    }
    console.log(i);
}