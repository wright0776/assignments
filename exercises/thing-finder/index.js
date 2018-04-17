const express = require('express')
const uuid = require('uuid')
const bodyParser = require('body-parser')
const app = express();
let shirts = require('./shirts')
const port = 8080

app.use(bodyParser.json())

app.route('/shirts')
    .get((req,res) => {
        const {query} = req;
        const queriedShirts = shirts.filter(shirt => {
            for(let key in query) {
                if(!shirt.hasOwnProperty(key) || String(shirt[key]).toLowerCase() !== query[key]) {
                    return false
                }
            }
            return true
        })
        res.status(200).send(queriedShirts);
    })
    .post((req,res) => {
        console.log(req)
        const newShirt = req.body;
        newShirt._id = uuid();
        shirts.push(newShirt);
        res.status(201).send(newShirt);
    })

app.route('/shirts/:id')
    .get((req,res) => {
        const {id} = req.params;
        const foundShirt = shirts.filter(shirt => shirt._id === id)[0];
        res.status(200).send(foundShirt);
    })
    .delete((req,res) => {
        const {id} = req.params;
        shirts = shirts.filter(shirt => shirt._id !== id);
        res.status(204).send({message: `you just deleted id: ${id}`})
    })
    .put((req,res) => {
        console.log(req)
        const {id} = req.params;
        let editedShirt = req.body;
        shirts = shirts.map(shirt => shirt._id === id ? editedShirt = {...shirts, ...editedShirt} : shirt);
        res.status(200).send(editedShirt);
    })

    app.listen(port, () => console.log(`server running on port ${port}`));