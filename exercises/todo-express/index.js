const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');

const app = express();
let todos = require('./todos.js');
const port = 8080;

app.use(bodyParser.json());

app.route('/todos')
    .get((req,res) => {
        res.status(200).send(todos);
    })
    .post((req,res) => {
        console.log(req.body)
        const newTodo = req.body;
        newTodo._id = uuid();
        todos.push(newTodo);
        res.status(201).send(newTodo);
    })

app.route('/todos/:id')
    .get((req,res) => {
        console.log(req.params.id)
        const {id} = req.params;
        const foundTodo = todos.filter(todo => todo._id === id)[0];
        res.status(200).send(foundTodo);
    })
    .delete((req,res) => {
        const {id} = req.params;
        todos = todos.filter(todo => todo._id !== id);
        res.status(204).send({ message: `${id} wuz ssuccessffully deleted` })
    })
    .put((req,res) => {
        const {id} = req.params;
        let editedTodo = req.body;
        todos = todos.map(todo => todo._id === id ? editedTodo = {...todo, ...editedTodo} : todo);
        res.status(200).send(editedTodo);
    })

app.listen(port, () => console.log(`server running on port ${port}`));