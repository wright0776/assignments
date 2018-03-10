// 1

var reverseStr = function (str) {
    return str.split("").reverse().join("")
}

// 2

var isNum = function (str) {
    if (typeof Number(str) == "number") {
        log
        return true;
    }
    return false;
}

// 3

var isEven = function (num) {
    if (num % 2 === 0) {
        return "even";
    }
    return "odd"
}

// 4 

var averageArray = function (arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

// 5

var a = [1, 2, 3]
var b = ["a", "b", "c"]

var combineArrays = function (arr1, arr2) {
    newArr = []
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            newArr.push(arr1[i])
            newArr.push(arr2[j])
        }
        return newArr
    }
}

console.log(combineArrays(a, b));