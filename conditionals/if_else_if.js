
let age = 2;

if (age < 0) {
    console.log("Invalid age entered.");
} else if (age >= 0 && age <= 3) {
    console.log("You are a toddler.");
} else if (age >= 4 && age <= 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 17) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

