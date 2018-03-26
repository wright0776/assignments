const localList = document.getElementById("the-list");
const localForm = document.getElementById("add-to-do");
const deleteButton = document.getElementById("delete");

function deleteItem(id) {
    axios.delete(`https://api.vschool.io/mattw/todo/${id}`);
    document.getElementById(id).remove();
}

function addImage(id, src, parentId) {
    let newImg = document.createElement("img");
    newImg.setAttribute("id", id);
    newImg.setAttribute("src", src);
    parentId.appendChild(newImg);
}

function addCheckbox(name, parent, parentId, parentOb) {
    let newCB = document.createElement("input");
    newCB.setAttribute("type", "checkbox");
    newCB.setAttribute("id", name)
    newCB.setAttribute("name", name);
    // console.log(parentId)
    newCB.setAttribute("onchange", `markToDoCompleted('${parentId}')`)
    parent.prepend(newCB);
}

function addElement(tag, id, cont) {
    let newEl = document.createElement(tag);
    newEl.setAttribute("id", id);
    newEl.setAttribute("name", `name${id}`)
    let content = document.createTextNode(cont);
    newEl.appendChild(content);
    localList.appendChild(newEl);
}

function markToDoCompleted(itemId) {
    let checked = document.getElementById(itemId);
    if (checked.className === 'done') {
        axios.put(`https://api.vschool.io/mattw/todo/${itemId}`, {completed: false} )
        checked.className = '';
    } else {
        axios.put(`https://api.vschool.io/mattw/todo/${itemId}`, {completed: true} )
        checked.setAttribute("class", "done")
    }
    // console.log(checked.className)
}

const apiList = axios.get("https://api.vschool.io/mattw/todo/").then(function (response) {
    // console.log(response);
    response.data.forEach(i => {
        addElement("li", i._id, i.title);
        addElement("p", `d${i._id}`, `Description: ${i.description}`);
        addElement("p", `p${i._id}`, `Price: ${i.price}`)
        let current = document.getElementById(i._id);
        // console.log(current)
        addCheckbox(`c${i._id}`, current, i._id, i);
        if (i.imgUrl) {
            addImage(`i${i._id}`, `${i.imgUrl}`, current)
            // console.log(i.imgUrl)
        }
        let comped = i.completed;
        console.log(comped)
        if (comped === true) {
            current.setAttribute("class", "done");
            let compedBox = document.getElementById(`c${i._id}`);
            compedBox.checked = true;
        }
    });
});

// localList.addEventListener("change", function (e) {
//     let changedId = e.target.id.split("").slice(1).join("");
//     markToDoCompleted(changedId);
// })

localForm.addEventListener("submit", function () {
    event.preventDefault();
    const newToDoItem = {
        title: localForm.title.value,
        description: localForm.description.value,
        price: localForm.price.value,
        imgUrl: localForm.image.value
    }

    axios.post("https://api.vschool.io/mattw/todo/", newToDoItem).then(function (response) {
        let identity = response.data._id;
        addElement("li", identity, response.data.title);
        addElement("p", identity, `Description: ${response.data.description}`);
        addElement("p", identity, `Price: ${response.data.price}`)
        let current = document.getElementById(identity)
        addCheckbox(`c${identity}`, current, identity, response.data);
        // console.log(response.data)
        if (response.data.imgUrl) {
            addImage(`i${identity}`, `${response.data.imgUrl}`, current)
            // console.log(response.data.imgUrl)
        }
        // if(response.data.completed) {
        //     let comp = document.getElementById(response.data._id)
        //     comp.style.fontStyle("line-through")
        // }
        localForm.reset();
        localForm.title.focus();
    })
})

deleteButton.addEventListener("click", function () {
    const inputs = document.querySelectorAll(`input[type='checkbox']`);
    inputs.forEach(input => {
        if (input.checked) {
            let x = input.id.split("").slice(1).join("");
            // console.log(x)
            axios.delete(`https://api.vschool.io/mattw/todo/${x}`)
            // console.log(input.checked);
            document.getElementById(x).remove();
            document.getElementById(`d${x}`).remove();
            document.getElementById(`p${x}`).remove();

        }
    })
    document.querySelectorAll(`input[type='checkbox']`)

})