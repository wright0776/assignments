var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1

vegetables.pop()

// console.log(fruit);
// console.log(vegetables);

// 2

fruit.shift()

// console.log(fruit);
// console.log(vegetables);

// 3

fruit.indexOf("orange")

// console.log(fruit);
// console.log(vegetables);

// 4

fruit.push(fruit.indexOf("orange"))

// console.log(fruit);
// console.log(vegetables);

// 5

// console.log(vegetables.length);

// console.log(fruit);
// console.log(vegetables);

// 6

vegetables.push(vegetables.length)

// console.log(fruit);
// console.log(vegetables);

// 7 

food = fruit.concat(vegetables)

// console.log(food)

// 8

food.splice(4, 2)

// console.log(food);

// 9

food.reverse()

// console.log(food);

// 10

console.log(food.join(", "));
