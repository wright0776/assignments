var readline = require("readline-sync")

var data = {
    name: "",
    choice: "",
    door: "locked",
    tries: 0,
    options: ["Put hand in hole", "Find the key", "Open the door"],
    options2: ["Put hand in hole", "Look for more clues", "Open the door"]
}

data.name = readline.question("\nReginald: Welcome to the escape room... what's your name?\n\n Prisoner: ");
console.log("\nReginald: Hello, " + data.name + ". My name is Reginald, I'm here to help you get out, but I can only tell you so much.\n\n\tYou have three choices of what to do next: ");

while (data.choice !== "Find the key") {
    if (data.tries === 0) {
        console.log("\n\tChoose wisely, or you may meet your end...")
    }
    if (data.choice === "Put hand in hole") {
        return console.log("\n*YOU PUT YOUR HAND IN THE HOLE...\n\n!!!!!!!!!!!!!!!!!!!!!!\t...you died\n")
    }
    if (data.choice === "Open the door") {
        console.log("\n*YOU TRY TO OPEN THE DOOR...\n\n\t!!!\t...the door is locked")
    }
    data.choice = data.options[readline.keyInSelect(data.options)]
    data.tries++;
    // console.log("\nAttempts to get out: " + data.tries)
}

console.log("\nReginald: Congratulations, you found the key!\n\n\tWhat will you do next?")

while (data.choice !== "Open the door") {
    if (data.choice === "Put hand in hole") {
        return console.log("\n*YOU PUT YOUR HAND IN THE HOLE...\n\n!!!!!!!!!!!!!!!!!!!!!!\t...you died\n")
    }
    if (data.choice === "Look for more clues") {
        console.log("\n*YOU LOOK FOR MORE CLUES...\n\n\t...the room is bare...\n")
    }
    data.choice = data.options2[readline.keyInSelect(data.options2)]
    data.tries++;
}

console.log("\nReginald: Congratulations! You made it out alive!\n\n\tWhat will you do with your life now?\n")