function Dog (name, breed) {
    this.name = name;
    this.breed = breed;
    this.numLegs = 4;
    this.hasTail = true;
}

Dog.prototype.speak = () => console.log("arf! arf! arf!");

Dog.prototype.sleep = () => console.log("snoreeeeeeee");

function Poodle (name, color) {
    Dog.call(this, name);
    this.breed = "poodle";
    this.color = color;
}

Poodle.prototype = Object.create(Dog.prototype);
Poodle.prototype.constructor = Poodle;

Poodle.prototype.speak = () => console.log("I am a big propper poofy poodle!");

const newPoo = new Poodle("Lady", "Black");

newPoo.speak();
console.log(newPoo.name);
newPoo.sleep();