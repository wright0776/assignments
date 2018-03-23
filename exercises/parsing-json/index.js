
function addElement(tag, ident) {
    let namesList = document.createElement(tag);
    namesList.setAttribute("id", ident)
    document.body.appendChild(namesList);
}

// function addNode(parentId, text) {
//     let a = document.getElementById(parentId);
//     let newContent = document.createTextNode(text);
//     a.appendChild(newContent);
// }

const xhr = new XMLHttpRequest();

addElement("ul", "new-list");

const myList = document.getElementById("new-list")

xhr.onreadystatechange = function parser() {
    if (xhr.readyState == 4 && xhr.status == 200) {

        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;

        console.log(data);

        function run() {
            console.log(data.results[0].name)
            data.results.forEach(function (i) {
                console.log(i.name)
                myList.innerHTML += `<li>${i.name}</li>`
            })
        }
        run();
    }
}

xhr.open("GET", "https://swapi.co/api/people/", true);
xhr.send();