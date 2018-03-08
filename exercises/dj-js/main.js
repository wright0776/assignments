var button = document.getElementById("button");

button.addEventListener("pointerenter",blue);
button.addEventListener("pointerleave",white);
button.addEventListener("pointerdown",red);
button.addEventListener("pointerup",yellow);
button.addEventListener("dblclick",green);
document.addEventListener("wheel",orange);

function blue(){
    button.style.backgroundColor = "blue";
}

function white(){
    button.style.backgroundColor = "white";
}

function red(){
    button.style.backgroundColor = "red";
}

function yellow(){
    button.style.backgroundColor = "yellow";
}

function green(){
    button.style.backgroundColor = "green";
}

function orange(){
    button.style.backgroundColor = "orange";
}