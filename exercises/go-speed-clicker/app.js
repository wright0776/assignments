const mainDiv = document.getElementById("mainDiv");

let count = localStorage.getItem("n") || 0;


function addElement(tag, cl, id, content, parent) {
    let el = document.createElement(tag);
    el.className = cl;
    el.id = id;
    let cont = document.createTextNode(content);
    el.appendChild(cont);
    parent.appendChild(el);
}

function clickCount(e) {
    count++;
    number.innerHTML = count;
    localStorage.setItem("n", count)
}

addElement("h1", "title", "title", "Go Speed Clicker", mainDiv);

addElement("h2", "subT", "subT", "click anywhere on the page...", mainDiv);

addElement("h3", "count", "count", count, mainDiv)

let number = document.getElementById("count");

window.addEventListener("click", clickCount)

