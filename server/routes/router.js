const express = require('express');
const route = express.Router();

const services = require('../services/render');



route.get('/', services.homeRoutes)
route.get('/add-user', services.addUserRoutes)
route.get('/update-user', services.updateUserRoutes)

// route.get('/', (req, res) => {
//     // res.send("Curd routelication")
//     res.render("index")
// })

// route.get('/add-user', (req, res) => {
//     // res.send("Curd routelication")
//     res.render("add_user")
// })
// route.get('/update-user', (req, res) => {
//     res.render("update_user")
// })

// route.get('/home', (req, res) => {
//     res.send("Curd Application Home Pages")
// })
module.exports = route;