// Use let and const and try to use these new features

// Replace all the vars with let and const

// John is the pet owner, and his name should be stored differently than the other names.

const name = 'John'  
const age = 101  
const pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++){  
  let pet = {type: pets[i]}
  let name = "";
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

// console.log(petObjects)
// console.log(name)


// re-write this .map() using a fat arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

// const vegetables = carrots.map(carrot => ({type: "carrot", name: carrot}))


// re-write this .filter() using a fat arrow function:

// friends = people.filter(person => !!person.friendly);


// re-write the following functions to be fat arrow functions:

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;


// write a functions that takes a firstName, a lastName, an age and returns a string like the following: 
// Hi Kat Stark, how does it feel to be 40?

const stmnt = (first = "Jane",last = "Doe",age = 100) => {
    return `Hi ${first} ${last}, how does it feel to be ${age}?`;
}

// console.log(stmnt())

// firstName should default to "Jane" 
// lastName should default to "Doe" 
// age should default to 100


// Use the shorthand syntax to make the following code block take up one line.

// const dogs = animals.filter( animal => animal.type === "dog");


// Template Literals


// Write a function that will take location and name and output this if location="Hawaii" and name="Janice":

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.  
// If you didn't do that with Template Literals, do it now with Template Literals.

const welcome = (loc = "Hawaii",name = "Janice") => {
    return `
    Hi ${name}!
    
    Welcome to ${loc}.
        
    I hope you enjoy your stay. Please ask the president of ${loc} if you
    need anything.
    `
}

console.log(welcome())