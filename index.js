const express = require('express')
const app = express()
const PORT = 3050
const userPost = require('./app/models/userPost.js')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw());
const router = require('./app/router/router.js');
const mongoose = require('mongoose')
var cors = require('cors')

app.use(cors())
// mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true, useUnifiedTopology: true },function(err){
//     if(err){
//         console.log("Mongo connect error: " + err);
//     }else{
//         console.log("Mongo connected successfull .");
//     }
// });

mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true, useUnifiedTopology: true  });


const validateMiddleWare = (req, res, next) => {
    console.log(req.body);
    if (req.body.email == null || req.body.password == null
    ) {
        return console.log("Ok");
    }
    next()

}

app.use('/user', validateMiddleWare)
app.use('/router',router);



// app.post('/user', (req, res) => {
//     // model creates a new doc with browser data
//     userPost.create(req.body, (error, userpost) => {
//         res.json(userpost);
//     })
// })

// app.get("/listUser", (req, res) => {
//     // userPost.find((error, listuser) => {
//     //     res.json(listuser);
//     // })
//     userPost.find().then((user) => {
//         res.send({ user });
//     }, (e) => {
//         res.status(400).send(e);
//     });
// })

// app.get('/:id', (req, res) => {
//     // userPost.findById(req.params.id, function (error, detailPost) {
//     //     res.json(detailPost)
//     // })
//     var userID = req.params.id;
//     userPost.findOne({_id: userID}).then((user) => {
//         res.send(user);
//     }, (e) => {
//         res.status(400).send(e);
//     });
// })



app.listen(PORT, () => { console.log("Server started on http://localhost:" + PORT) })

module.exports = app;