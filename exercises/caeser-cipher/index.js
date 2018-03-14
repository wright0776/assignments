var rs = require("readline-sync")

var input = rs.question("What phrase would you like to encrypt? ").toLowerCase();

var num = parseInt(rs.question("How many letters would you like to shift? (0-26): "))

var shift = function (str) {
    var alph = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    newStr = ""
    for (var i = 0; i < str.length; i++) {
        if (alph.indexOf(str[i])>=0) {
            newStr += alph[alph.indexOf(str[i]) + num]
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

console.log("here is your new phrase: " + shift(input))
