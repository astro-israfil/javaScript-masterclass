const username = NaN;

if (username) {
    console.log("The username is truthy");
}

// falsy values: 0, -0, NaN, "", null, undefined, false

// truthy values: everything else
// {}, [], "0", "false", "null", "undefined", true, 1, -1, Infinity, -Infinity, function() {}


// 0 == ""
// true
// 0 == false
// true
// 0 == " "
// true
// 0 == "   "
// true


// Nullish Coalescing Operator (??)

const temperature = null
const defaultTemperature = 0 ?? null;

console.log(defaultTemperature); // 0


// ternary operator

const age = 18;
const canGetADriverLicense = age >= 18 ? "Yes" : "No";

console.log(canGetADriverLicense); // Yes


age >= 18 ? 
    console.log("You can get a driver license") 
    : console.log("You can't get a driver license");

// short-circuiting
const displayName = username || "Guest";
console.log(displayName); // Guest