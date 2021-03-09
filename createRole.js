const mongoose = require('mongoose')
const Role = require('./app/models/role')
const Menu = require('./app/models/menu')
mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true, useUnifiedTopology: true  });

// Role.create({
//     roleName: "Admin"
// }, (error, role) => {
//     console.log(error, role)
// })

// Role.create({
//     roleName: "Manager"
// }, (error, role) => {
//     console.log(error, role)
// })

// Role.create({
//     roleName: "Leader"
// }, (error, role) => {
//     console.log(error, role)
// })

// Role.create({
//     roleName: "School"
// }, (error, role) => {
//     console.log(error, role)
// })

// Role.create({
//     roleName: "Faculty"
// }, (error, role) => {
//     console.log(error, role)
// })
// Role.create({
//     roleName: "Interns"
// }, (error, role) => {
//     console.log(error, role)
// })

