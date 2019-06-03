const express = require('express');
const cart = express.Router();
const cartItems = require('../data');

cart.get('/', (req, res) => {
    res.send(cartItems);
});

cart.post('/', (req, res) => {
    console.log(req.body);
});

cart.put('/:id', (req, res) => {
    console.log(req.params.id, req.body);
});

cart.delete('/:id', (req, res) => {
    console.log(req.params.id);
});

module.exports = cart;