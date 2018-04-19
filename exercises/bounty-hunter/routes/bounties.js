const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const bountyRouter = express.Router();
let bounties = require('../bountyData');

bountyRouter.route('/')
    .get((req,res) => {
        console.log(req)
        const {query} = req;
        const queriedBounties = bounties.filter(bounty => {
            for (let key in query) {
                if (!bounty.hasOwnProperty(key) || String(bounty[key]).toLowerCase() !== query[key]) {
                    return false;
                }
            }
            return true;
        })
        res.status(200).send(queriedBounties);
    })
    .post((req,res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(201).send(newBounty);
    })

bountyRouter.route('/:id')
    .get((req,res) => {
        const {id} = req.params;
        const foundBounty = bounties.filter(bounty => bounty._id === id)[0];
        res.status(200).send(foundBounty);
    })
    .delete((req,res) => {
        const {id} = req.params;
        bounties = bounties.filter(bounty => bounty._id !== id);
        res.status(200).send({
            "msg": `Successfully deleted bounty id: ${id}`
        })
    })
    .put((req,res) => {
        const {id} = req.params;
        let editedBounty = req.body;
        bounties = bounties.map(bounty => bounty._id === id ? editedBounty = {...bounties, ...editedBounty} : bounty);
        res.status(200).send(editedBounty);
    })

    module.exports = bountyRouter;