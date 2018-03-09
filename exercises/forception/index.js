var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var a = function (arr, str) {
    arrOut = [];
    for (i = 0; i < arr.length; i++) {
        arrOut.push(arr[i] += ":")
        for (j = 0; j < str.length; j++) {
            arrOut.push(str[j].toUpperCase())
        }
    }
    return arrOut;
}

console.log(a(people, alphabet));