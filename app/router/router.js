var express = require('express');
var router = express.Router();
const userPost = require('../models/userPost.js');
const {validationResult} = require('express-validator');
const {UserValidator} = require('../validators/validator');
const {userController} = require('../controller/userController');
const {menuController} = require('../controller/menuController');
const Menu = require('../models/menu');


router.get('/menu/:roleId', menuController.listMenu)

router.post('/newMenu', menuController.creatMenu)

router.post('/register', UserValidator, userController.creatUser)

router.post('/user', (req, res) => {
    // model creates a new doc with browser data
    userPost.create(req.body, (error, userpost) => {
        res.json(userpost);
    })
})

router.get("/listUser", (req, res) => {

    userPost.find().then((user) => {
        res.send({ user });
    }, (e) => {
        res.status(400).send(e);
    });
})

router.get('/:id', (req, res) => {
    // userPost.findById(req.params.id, function (error, detailPost) {
    //     res.json(detailPost)
    // })
    var userID = req.params.id;
    userPost.findOne({_id: userID}).then((user) => {
        res.send(user);
    }, (e) => {
        res.status(400).send(e);
    });
})

module.exports = router;