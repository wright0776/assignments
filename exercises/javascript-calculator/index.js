var ask = require("readline-sync")


var f = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b
    },
    div: function (a, b) {
        return a / b
    }
}

opts = ["add", "sub", "mult", "div"]

var num1 = ask.questionFloat("\nPlease enter your first number: ")
var num2 = ask.questionFloat("\nPlease enter your second number: ")
var fun = opts[ask.keyInSelect(opts, "\nPlease enter the operation to perform: ")]

var result = function (ans,a,b) {
    if (ans === "add") {
        return f.add(a,b);
    } else if (ans === "sub") {
        return f.sub(a,b);
    } else if (ans === "mult") {
        return f.mult(a,b);
    } else if (ans === "div") {
        return f.div(a,b);
    }
}

console.log("\nThe result is: " + result(fun,num1,num2) + "\n")