var addInA = document.getElementById("addInA")
var addInB = document.getElementById("addInB")
var addOut = document.getElementById("addOut")
var addButton = document.getElementById("addButton")
var resetAdd = document.getElementById("resetAdd")

var subInA = document.getElementById("subInA")
var subInB = document.getElementById("subInB")
var subOut = document.getElementById("subOut")
var subButton = document.getElementById("subButton")
var resetSub = document.getElementById("resetSub")

var multInA = document.getElementById("multInA")
var multInB = document.getElementById("multInB")
var multOut = document.getElementById("multOut")
var multButton = document.getElementById("multButton")
var resetMult = document.getElementById("resetMult")

// user puts a number in addition box 1 & 2
// user pushes add button to add numbers together

var add = function(num1,num2){
    return num1 + num2;
}

var subtract = function(num1,num2){
    return num1 - num2;
}

var multiply = function(num1,num2){
    return num1 * num2;
}

addButton.addEventListener("click", function(event){
    addOut.innerHTML = add(addInA.valueAsNumber,addInB.valueAsNumber) + ", bitches!"
})

subButton.addEventListener("click", function(event){
    subOut.innerHTML = subtract(subInA.valueAsNumber,subInB.valueAsNumber) + ", what!?"
})

multButton.addEventListener("click", function(event){
    multOut.innerHTML = multiply(multInA.valueAsNumber,multInB.valueAsNumber) + ", multiplied!"
})

resetAdd.addEventListener("click", function(event){
    addOut.innerHTML = "";
    addInA.value = "";
    addInB.value = "";

})

resetSub.addEventListener("click", function(event){
    subOut.innerHTML = "";
    subInA.value = "";
    subInB.value = "";
})

resetMult.addEventListener("click", function(event){
    multOut.innerHTML = "";
    multInA.value = "";
    multInB.value = "";
})

// get value of first box and value of second box
// when add button is pressed, add first box value and second box value
// output to third box

