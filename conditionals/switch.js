let age = 6;

switch (true) {
    case age < 0:
        console.log("Invalid age entered.");
        break;
    case age <= 3:
        console.log("You are a toddler.");
        break;
    case age <= 12:
        console.log("You are a child.");
        break;
    case age <= 17:
        console.log("You are a teenager.");
        break;
    default:
        console.log("You are an adult.");
}