var sum = function (num1, num2) {
    return num1 + num2
}

console.log(sum(5, 7));

//

var largest = function (num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(largest(6, 2, 9));

//

var evenOrOdd = function (num) {
    if (num % 2 === 0) {
        return "even";
    }
    return "odd";
}

console.log(evenOrOdd(5));

//

var twentyString = function (str) {
    if (str.length <= 20) {
        return str.concat(str);
    }
    return str.slice(0, (str.length / 2))
}

console.log(twentyString("helloMyNameIsMatt"));
console.log(twentyString("helloMyNameIsMattILikeToLongboard"));

// Optional Challenge 1:



var fibonacci = function (n) {
    results = {
        fib: [],
        total: 0
    }
    if (n === 1) {
        results.fib = [0, 1];
        results.total = 1;
        return results;
    } else {
        results.fib = fibonacci(n - 1);
        results.fib.push(results.fib[n - 1] + results.fib[n - 2]);
        for (var i = 0; i < results.fib.length; i++) {
            results.total += results.fib[i];
        }
        return results;
    }
}

console.log(fibonacci(7));

// Optional Challenge 2: 

var quadratic = function (a, b, c) {
    var result = (((-1 * b) + Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a));
    var result2 = (((-1 * b) - Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a));
    return result + " " + result2;
}

console.log(quadratic(2, 2, 2))









//Optional Challenge 3: incomplete

var str = "Gregarious";

var mostFrequent = function (str) {

    var most = ""
    lowers = str.toLowerCase

    for (var i = 0; i < lowers.length; i++) {
        if (lowers[i] === ) {

        }
    }
}

console.log(mostFrequent(str))