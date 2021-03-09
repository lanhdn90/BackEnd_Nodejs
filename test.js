const mongoose = require('mongoose')
const userPost = require('./app/models/userPost')
mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true, useUnifiedTopology: true  });
// userPost.create({
//     email: "linhgdn2001@gmail.com",
//     username: "linhgdn2001",
//     password: "123456",
//     password_confirm: "123456",
// }, (error, userpost) => {
//     console.log(error, userpost)
// })

// userPost.find({}, (error, userPost) => {
//     console.log(error, userPost)
// })

// userPost.find({
//     email: "chinhdn95@gmail.com",
// }, (error, userPost) => {
//     console.log(error, userPost)
// })

// Update document
// var id = "60421b6344250f0d58504e94";
// userPost.findByIdAndUpdate(id, {
//     password: "12345678",
//     password_confirm: "12345678"
// }, (error, userPost) => {
//  console.log(error, userPost)
// })


// Xóa một document
// var id = "60421e511090270d409f9496";
// userPost.findByIdAndDelete(id, (error, userPost) => {
//  console.log(error, userPost)
// })