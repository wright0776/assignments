var form = document.getElementById("travel");
var first = document.getElementById("first");
var last = document.getElementById("last");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var other = document.getElementById("other");
var destination = document.getElementById("destination");
var vegetarian = document.getElementById("vegetarian");
var vegan = document.getElementById("vegan");
var glutenFree = document.getElementById("glutenFree");
var submit = document.getElementById("submit");
var output = document.getElementById("output")

var data = {
    first: "",
    last: "",
    age: "",
    gender: "",
    destination: "",
    diet: []
}

var dataPile = function(obj){
    str = ""
    for(i in obj){
        str += i + ": " + obj[i] + "<br>"
    }
    output.innerHTML = str
}

var firstF = function(e){
    data.first = e.target.value;
    dataPile(data);
}

var lastF = function(e){
    data.last = e.target.value;
    dataPile(data);
} 

var ageF = function(e){
    data.age = e.target.value;
    dataPile(data);
}

var genderF = function(e){
    data.gender = e.target.value;
    dataPile(data);
}

var destinationF = function(e){
    data.destination = e.target.value;
    dataPile(data);
}

var dietF = function(e){
    if(e.target.checked){
    data.diet.push(" " + e.target.value);
    dataPile(data);
    } else {
        var index = data.diet.indexOf(event.target.name)
        data.diet.splice(index,1)
    }
    dataPile(data);
}

first.addEventListener("input", firstF)

last.addEventListener("input", lastF)

age.addEventListener("input", ageF)

female.addEventListener("change", genderF)

male.addEventListener("change", genderF)

other.addEventListener("change", genderF)

destination.addEventListener("change", destinationF)

vegetarian.addEventListener("change", dietF)

vegan.addEventListener("change", dietF)

glutenFree.addEventListener("change", dietF)

form.addEventListener("submit", function () {
    // event.preventDefault();
    alert("Thank you! \nWe have just stolen your identity \nand will be traveling as YOU to " + data.destination + "!\n\n" + "First Name: " + data.first + "\n" + "Last Name: " + data.last + "\n" + "Age: " + data.age + "\n" + "Gender: " + data.gender + "\n" + "Destination: " + data.destination + "\n" + "Diet Restriction: " + data.diet.join(", "))
})



