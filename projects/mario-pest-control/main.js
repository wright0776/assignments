var goombas = document.getElementById("goombas")
var bombs = document.getElementById("bombs")
var cheeps = document.getElementById("cheeps")
var subT = document.getElementById("subT")
var total = document.getElementById("total")
var reset = document.getElementById("reset")

var goombasPrice = 5
var bombsPrice = 7
var cheepsPrice = 11

var notAll = function(){}

goombas.addEventListener("input", function(e){
    total.innerHTML = (
        (goombas.valueAsNumber * goombasPrice || 0) + 
        (bombs.valueAsNumber * bombsPrice || 0) + 
        (cheeps.valueAsNumber * cheepsPrice || 0)) + " coins"
    subT.innerHTML = (
        "Goombas:  " + (goombas.valueAsNumber * goombasPrice || 0) + " coins<br>" +
        "Bob-ombs:  " + (bombs.valueAsNumber * bombsPrice || 0) + " coins<br>" +
        "Cheep-Cheeps:  " + (cheeps.valueAsNumber * cheepsPrice || 0) + " coins"
    )
})

bombs.addEventListener("input", function(e){
    total.innerHTML = (
        (goombas.valueAsNumber * goombasPrice || 0) + 
        (bombs.valueAsNumber * bombsPrice || 0) + 
        (cheeps.valueAsNumber * cheepsPrice || 0)) + " coins"
    subT.innerHTML = (
        "Goombas:  " + (goombas.valueAsNumber * goombasPrice || 0) + " coins<br>" +
        "Bob-ombs:  " + (bombs.valueAsNumber * bombsPrice || 0) + " coins<br>" +
        "Cheep-Cheeps:  " + (cheeps.valueAsNumber * cheepsPrice || 0) + " coins"
    )
})

cheeps.addEventListener("input", function(e){
    total.innerHTML = (
        (goombas.valueAsNumber * goombasPrice || 0) + 
        (bombs.valueAsNumber * bombsPrice || 0) + 
        (cheeps.valueAsNumber * cheepsPrice || 0)) + " coins"
    subT.innerHTML = (
        "Goombas:  " + (goombas.valueAsNumber * goombasPrice || 0) + " coins<br>" +
        "Bob-ombs:  " + (bombs.valueAsNumber * bombsPrice || 0) + " coins<br>" +
        "Cheep-Cheeps:  " + (cheeps.valueAsNumber * cheepsPrice || 0) + " coins"
    )
})

reset.addEventListener("click", function(e){
    total.innerHTML = 0
    goombas.value = ""
    bombs.value = ""
    cheeps.value = ""
    subT.innerHTML = ""
})