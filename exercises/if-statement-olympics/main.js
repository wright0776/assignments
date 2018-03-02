// Preliminaries

if (5 > 3) {
    console.log("is greater than");
}

if ("cat".length === 3) {
    console.log("is the length");
}

if ("cat" === "dog") {
    console.log("the same");
} else {
    console.log("not the same");
}

// Bronze Medal

var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    if (person.name[0] === "B") {
        console.log(person.name + " is allowed to go to the movie");
    }
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

// Silver Medal

if (1 === "1") {
    console.log("loose");
} else if (1 == "1") {
    console.log("abstract");
} else {
    console.log("not equal at all");
}

if (1 <= 2 && 2 === 4 || 3 * 4 > 10 && 5 + 10 > 10) {
    console.log("yes");
}

// Gold Medal

// 1. 

if (typeof ("dog") === "string") {
    console.log("true");
} else {
    console.log("false");

}

// 2.

if (typeof (true) === "boolean") {
    console.log("true");
} else {
    console.log("false");

}

// 3. 

var weather = "hot";

// function isDefined(var1) {
//     if (typeof var1 === 'undefined' || var1 === null) {
//         console.log("not defined");
//     } else {
//         console.log("has been defined");
//     }
// }

if (weather) {
    console.log("is defined");
}

// 4. 

if ("s".charCodeAt(0) > 12) {
    console.log("s is greater than 12");
} else if ("s".charCodeAt(0) < 12) {
    console.log("a is less than 12");
} else if ("s".charCodeAt(0) === 12) {
    console.log("s is equal to 12");
}

console.log("a".charCodeAt(0));

// s equals 115!!

// 5.

var myNum = 10;

if (myNum % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


