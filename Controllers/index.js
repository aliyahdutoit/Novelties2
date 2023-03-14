//  EXPRESS //
const express = require('express');
//  PATH //
const path = require('path');
// BODY-PARSER //
const bodyParser = require('body-parser');
//  ROUTE //
const route = express.Router();
const {User, Product} =require('../Model');
//  USER //
const user = new User();
//  PRODUCT //
const product = new Product();

// `const cart = new Cart();`

route.get('^/$|/novelties', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../View/index.html'));
});

// ----- USERS ------- //

// LOGIN //
route.post('/login', bodyParser.json(), (req, res) => {
    user.login(req, res);
});

// FETCH ALL USERS //
route.get('/users', (req, res) => {
    user.fetchUsers(req, res);
});

//  FETCH SINGLE USER //
route.get('/user/:id', (req, res) => {
    user.fetchUser(req, res);
});

// UPDATE USER //
route.put('/user/:id', bodyParser.json(), (req, res) => {
    user.updateUser(req, res);
});

// CREATE USER //
route.post('/register', bodyParser.json(), (req, res) => {
    user.createUser(req, res);
});

//  DELETE USER //
route.delete('/user/:id', (req, res) => {
    user.deleteUser(req, res);
});

// ------ PRODUCTS ------- //

// FETCH ALL PRODUCT ITEMS //
route.get('/items', (req, res) => {
    product.fetchItems(req, res);
});

// FETCH SINGLE PRODUCT  ITEM //
route.get('/item/:id', (req, res) => {
    product.fetchItem(req, res);
});

//  ADD A PRODUCT ITEM //
route.post('/item', bodyParser.json(), (req, res) => {
    product.addItem(req, res);
});

//  UPDATE PRODUCT ITEM //
route.put('/item/:id', bodyParser.json(), (req, res) => {
    product.updateItem(req, res);
});

//  DELETE PRODUCT ITEM //
route.delete('/item/:id', (req, res) => {
    product.deleteItem(req, res);
});

//  --------- CART ----------- //

// GET CART //
route.get('/user/:id/cart', bodyParser.json(), (req, res) => {
    cart.fetchCart(req, res)
});

// ADD TO CART //
// route.post('/user/:id/cart', (req, res) => {
//     cart.addToCart(req, res)
// })

//  UPDATE CART //
// route.put('/user/:id/cart/:id', bodyParser.json(), (req, res) => {
//     cart.updateCart(req, res)
// })

// DELETE CART ITEM //
// route.delete('/user/:id/cart/:id', bodyParser.json(), (req, res) => {
//     cart.deleteCartItem(req, res)
// })
module.exports = route;