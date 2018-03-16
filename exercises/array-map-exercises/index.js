// 1

var numbers = [2, 5, 100]

var double = function (arr) {
    return arr.map(x => x * 2)
}

// console.log(double(numbers))

// 2

var stringItUp = function (arr) {
    return arr.map(x => x.toString())
}

// console.log(stringItUp(numbers))

// 3

var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var capitalize = function (arr) {
    return arr.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
}

// console.log(capitalize(names))

// 4 

var names2 = [{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

var namesOnly = function (arr) {
        return arr.map(x => x.name)
}

// console.log(namesOnly(names2))

var makeStrings = function (arr) {
    return arr.map(function (x) {
        if (x.age >= 18) {
            return x.name + " can go to The Matrix."
        } else {
            return x.name + " is under age."
        }
    })
}

// console.log(makeStrings(names2))

var readyToPutInTheDOM = function (arr) {
    return arr.map(function (x) {
        return "<h1>"+x.name+"</h1>"+"<h2>"+x.age+"</h2>"
    })
}

// console.log(readyToPutInTheDOM(names2))