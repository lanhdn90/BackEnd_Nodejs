// var express = require('express');
const userPost = require('../models/userPost.js');
// const bodyParser = require('body-parser')
let creatUser = (req, res) =>{
    
    userPost.create(req.body, (error, userpost) => {
        res.json(userpost);
    })
}

let userController = {
    creatUser: creatUser,
};

module.exports = {userController};