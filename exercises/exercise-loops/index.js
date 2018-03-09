// 1

var a = function (str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}

// 2 

var b = function (str, char) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return char + " is at index " + i
        }
    }
    return char + " is not in the string"
}

// 3

var c = function(arr){
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 42) {
            return "found 42 at index " + i
        }
    }
    return "42 not found"
}

// 4

var d = function(arr){
    var lowest = arr[0];
    for (i = 0; i < 10; i++) {
        if (arr[i] < lowest){
            lowest = arr[i];
        }
    }
    return lowest;
}

