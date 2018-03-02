// 1.

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

// var computers = officeItems.filter(word => word === "computer")

// var numOfComputers = computers.length

// console.log(numOfComputers);

// or

// var numOfComps = 0

// for (i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//         numOfComps++;
//     }
// }

// console.log(numOfComps);

// 2. 

// var peopleWhoWantToSeeMadMaxFuryRoad = [{
//     name: "Mike",
//     age: 12,
//     gender: "male"
// }, {
//     name: "Madeline",
//     age: 80,
//     gender: "female"
// }, {
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
// }, {
//     name: "Sam",
//     age: 30,
//     gender: "male"
// }, {
//     name: "Suzy",
//     age: 4,
//     gender: "female"
// }]

// for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let him in.")
//         }
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in.")
//         }
//     } else {
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in.")
//         }
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, dont' let her in.")
//         }
//     }
// }

// optional bonus challenge

var buttonPresses = [2, 5, 435, 4, 3];

function lightOnOrOff(arr) {
    totalButtonPresses = 0;
    for (i = 0; i < arr.length; i++) {
        totalButtonPresses += arr[1];
    }
    if(totalButtonPresses % 2 === 0){
        console.log("light is off");
    } else {
        console.log("light is on");
    }
}

lightOnOrOff(buttonPresses)