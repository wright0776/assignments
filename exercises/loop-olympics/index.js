// Preliminaries

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (i = 9; i >= 0; i--) {
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

// Bronze

// var arr1 = []

// for (i = 0; i < 10; i++) {
//     arr1.push(i)
// }

// console.log(arr1);

// for (i = 0; i < 101; i++) {
//     if(i%2===0){
//         console.log(i);
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// var arr2 = []

// for (i = 0; i < fruit.length; i++){
//     if(i%2===0){
//         arr2.push(fruit[i]);
//     }
// }
// console.log(arr2);

// Silver Medal

// var peopleArray = [
//     {
//         name: "Harrison Ford",
//         occupation: "Actor"
//     },
//     {
//         name: "Justin Bieber",
//         occupation: "Singer"
//     },
//     {
//         name: "Vladimir Putin",
//         occupation: "Politician"
//     },
//     {
//         name: "Oprah",
//         occupation: "Entertainer"
//     }
// ]

//   for(i=0;i<peopleArray.length;i++){
//       console.log(peopleArray[i]["name"])
//   }

// var names = [];
// var occupations = [];

// for (let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i]["name"])
//     occupations.push(peopleArray[i]["occupation"])
// }
// console.log(names);
// console.log(occupations);

// var names = [];
// var occupations = [];

// for (i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         names.push(peopleArray[i].name)
//     } else {
//         occupations.push(peopleArray[i].occupation)
//     }
// }
// console.log(names);
// console.log(occupations);

// Gold Medal

// 1.

// var arrNested = []

// var arrMain = []

// for(var i = 0; i < 3 ; i++){
//     arrNested.push(0)
// }

// for(var i = 0; i < 3 ; i++){
//     arrMain.push(arrNested)
// }

// console.log(arrMain);

// 2. 

// var output = []

// for (var i = 0; i < 3; i++) {
//     output.push([])
//     for (var j = 0; j < 3; j++) {
//         output[i].push(i)
//     }
// }


// console.log(output);

// 3. 

// var output = []

// for (var i = 0; i < 3; i++) {
//     output.push([])
//     for (var j = 0; j < 3; j++) {
//         output[i].push(j)
//     }
// }


// console.log(output);

var output = []

for (var i = 0; i < 3; i++) {
    output.push([])
    for (var j = 0; j < 3; j++) {
        output[i].push("x")
    }
}


console.log(output);