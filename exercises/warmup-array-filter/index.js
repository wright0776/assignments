Array.prototype.myFilter = function (callback) {
    var array = this;
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArr.push(array[i])
        }
    };
    return newArr
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers = numericArray.myFilter(function (element) {
    return element <= 5;
});

console.log(noLargeNumbers);