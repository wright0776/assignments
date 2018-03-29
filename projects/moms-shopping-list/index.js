const main = document.getElementById("main");

function addElement(obj) {
    let el = document.createElement(obj.tag);
    el.className = obj.cl;
    el.id = obj.id;
    let tn = document.createTextNode(obj.cont);
    el.appendChild(tn);
    obj.parent.appendChild(el);
}

function addLi(obj) {
    let b = document.createElement("button");
    b.className = "xButton";
    b.name = "deleteButton";
    let x = document.createTextNode("X");
    b.appendChild(x);
    let el = document.createElement(obj.tag);
    el.className = obj.cl;
    el.id = obj.id;
    let tn = document.createTextNode(obj.cont);
    el.appendChild(b);
    el.appendChild(tn);
    obj.parent.appendChild(el);
    b.addEventListener("click", function () {
        el.remove();
        dataArr = dataArr.filter(x => x !== obj.id)
        localStorage.setItem("data", JSON.stringify(dataArr));

    })
}

function addButton(obj) {
    let el = document.createElement("button");
    el.id = obj.id;
    el.className = obj.cl;
    let tn = document.createTextNode(obj.cont);
    el.appendChild(tn);
    obj.parent.appendChild(el);
}

function addInput(obj) {
    let el = document.createElement("input");
    el.id = obj.id;
    el.className = obj.cl;
    el.name = obj.name;
    el.placeholder = obj.plh;
    obj.parent.appendChild(el);
}

const title = addElement({
    tag: "h1",
    cl: "title",
    id: "title",
    cont: "Mom's Shopping List",
    parent: main
});

const mainInput = addInput({
    id: "mainInput",
    cl: "mainInput",
    plh: "Item Name",
    name: "input",
    parent: main
})

const mainButton = addButton({
    id: "mainButton",
    cl: "mainButton",
    cont: "add",
    parent: main
})

const mainList = addElement({
    tag: "ul",
    cl: "mainList",
    id: "mainList",
    cont: "",
    parent: main
})

const i = document.getElementById("mainInput");
const b = document.getElementById("mainButton");
const l = document.getElementById("mainList");
let obj1 = { "todos": [] };

let dataArr = [];

if (JSON.parse(localStorage.getItem("data"))) {
    dataArr = (JSON.parse(localStorage.getItem("data")))
}

// function getFromData() {
//     let data = JSON.parse(localStorage.getItem("data"))
//     if (!data)
//         return;
//     data.todos.forEach(x => {
//         let f = {
//             tag: "li",
//             cl: "item",
//             id: x.id,
//             cont: x.cont,
//             parent: l
//         }
//         addLi(f);
//     });
// }

function getFromData() {
    let data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    if (!data)
        return;
    data.forEach(x => {
        let f = {
            tag: "li",
            cl: "item",
            id: x,
            cont: x,
            parent: l
        }
        addLi(f);
    });
}

function add() {
    let f = {
        tag: "li",
        cl: "item",
        id: i.value,
        cont: i.value,
        parent: l
    }
    addLi(f);
    // obj1.todos.push(f);
    // console.log(obj1)
    // localStorage.setItem("data", JSON.stringify(obj1));
    dataArr.push(i.value);
    localStorage.setItem("data", JSON.stringify(dataArr));
    // localStorage.setItem(i.value, i.value)
    i.value = "";
    i.focus();
}

getFromData();

b.addEventListener("click", function () {
    add();
});

i.addEventListener("keypress", function (e) {
    let code = e.keyCode;
    if (code === 13) {
        add();
    }
})

