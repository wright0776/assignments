var str = "aaSaeacaaraetaas amaausta aabea akaaaeapaat asaeacareata."

let removeA = function(str) {
    arrA = str.split("");
    return arrA.filter(word => word != "a").join("");
}

console.log(removeA(str))