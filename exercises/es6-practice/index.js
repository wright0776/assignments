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

const vegetables = carrots.map(carrot => {
    return {type: "carrot", name: carrot}
})

// re-write this .filter() using a fat arrow function:

friends = people.filter(person => !!person.friendly);
// re-write the following functions to be fat arrow functions:

function doMathSum(a, b){  
    return a + b
}

var produceProduct = function(a, b){  
    return a * b
}