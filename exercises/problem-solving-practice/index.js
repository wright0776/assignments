// 1 

var largest = function (arr) {
    var topNo = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > topNo) {
            topNo = arr[i];
        }
    }
    return topNo;
}

// console.log(largest([3, 5, 2, 8, 1]))

// 2

var lettersWithStrings = function (arr, char) {
    var is = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].search(char) >= 0) {
            is.push(arr[i])
        }
    }
    return is.join(", ")
}

// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))

// 3 

var isDivisible = function (num1, num2) {
    return (num1 % num2 === 0)
}

console.log(isDivisible(15, 4))