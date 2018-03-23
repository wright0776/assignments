const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form")

function deleteItem(id) {
    axios.delete(`https://api.vschool.io/mattw/todo/${id}`)
    document.getElementById(id).remove();
}

function createTodo (todo) {
    let span;
    if (todo.completed) {
        span = `<span class="completed">${todo.title}</span>`
    } else {
        span = `<span>${todo.title}</span>`
    }
    return `
    <li id="${todo._id}>
    <button onclick="deleteItem('${todo._id}')">x</button>
    <input type="checkbox" onchange="markTodoCompleted('${todo})"/>
    <span>${todo.title}</span>
    </li>`
}

function markTodoCompleted(todo) {
    axios.put(`https://api.vschool.io/mattw/todo/${todo._id}`, {completed: !todo.completed} )
    .then(function(response) {
        const span = document.querySelector(`#${todo._id} > span`);
        span.style.color = "gray";
        span.style.style = "line-through";
    })
}

axios.get("https://api.vschool.io/mattw/todo/").then(function(response){
    response.data.forEach(function(todo) {
        todoList.innerHTML = createTodo(todo)
    })
})



todoForm.addEventListener("submit", function(){
    event.preventDefault();
    const newTodoItem = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value
    }

    axios.post("https://api.vschool.io/mattw/todo/", newTodoItem).then(function(response){
        todoList.innerHTML += `<li>${response.data.title}</li>`
        todoForm.reset();
        todoForm.title.focus();
    })
})