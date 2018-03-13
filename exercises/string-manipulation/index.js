var ask = require("readline-sync");

var data = {
    firstName: "",
    lastName: "",
    title: "",
    color: "",
    about: "",
    num: 0
}

console.log("\nHello! My name is Grick. Help an old pirate get to know you!\n");

data.firstName = ask.question("What be your first name, matey? \n\n ");

console.log("\nAhoy, " + data.firstName + "!\n")

data.lastName = ask.question("And what be your last name? \n\n ");

data.title = ask.question("\nAll right then, " + data.firstName + " " + data.lastName + ", what title do ye go by? (Mr., Mrs., Ms., Miss, etc.) \n\n ");

console.log("\nVery well, " + data.title + " " + data.firstName + " " + data.lastName + ".\n");

data.color = ask.question("What be your favorite color? \n\n ")

console.log("\n" + data.color.toUpperCase() + "?!?! Well " + data.color + " is me favorite color too!!")

console.log("I likes it because it be " + data.color.length + " letters long and " + data.color.length + " be me favorite number!")

data.about = ask.question("I'm rambling, tell me something about yourself, something longer than twenty letters. \n\n ")

console.log("\nPardon me manners, I missed the first half of what ye said, all I caught was: '" + data.about.slice(data.about.length / 2) + "' \n")

data.num = ask.question("Let me start from a spot in that statement that you chose, a number between 0 and "+data.about.length+". \n\n")

console.log("\n"+data.about.slice(data.num) +"\n\nWell I gotta go sail.\n\nGoodbye!\n")
