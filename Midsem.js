// Step 1: Personalized Greeting
let userName = prompt("Enter your first name:");

if (userName === "" || userName === null) {
    userName = "Guest"; // Default name if the input is empty or canceled
}

// Step 2: Welcome Message
alert(`Welcome to EatNow Cafe, ${userName}! We are happy to attend to you.`);

// Step 3: Display Menu Items in Console
let menu = [
    "Grilled Chicken",
    "Ugali Beef",
    "Plain Chips",
    "Grilled Mutton",
    "Pork Chops"
];

console.log("Today's Menu at EatNow Cafe:");

menu.forEach((dish, index) => {
    console.log(`${index + 1}. ${dish}`);
});

// Step 4: Adding a New Dish
let newDish = prompt("Suggest a new dish to add to the menu:");

if (newDish === "" || newDish === null) {
    console.log("No dish was added. Please suggest a valid dish.");
} else {
    menu.push(newDish); // Add the new dish to the menu
    console.log("Updated Menu at EatNow Cafe:");

    // Display the updated menu
    menu.forEach((dish, index) => {
        console.log(`${index + 1}. ${dish}`);
    });
}
