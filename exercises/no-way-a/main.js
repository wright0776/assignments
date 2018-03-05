var str = "aaSaeacaaraAAetaas amaausta aabea akaaaeapaat asaeacareata."

let removeA = function(str) {
    arrA = str.split("");
    return arrA.filter(word => word !== "a" && word !== "A").join("");
}

console.log(removeA(str))