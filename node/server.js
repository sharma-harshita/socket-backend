const express = require("express");
const app = express();
const socket = require("socket.io");

const server = app.listen(3001, ()=>{
    console.log("working");
})
const io = socket(server,{
    cors : {
        origin : "*"
    }
})

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//         io.emit(msg);
//     });
// });
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});


// app.get('/',(req,res)=>{
//     res.send("Hello");
// })



// app.listen(3001);













// app.get
// const jwt = require("jsonwebtoken");

// app.get('/posts', function(req, res){
//     const value = req.headers("authorization");
//     const token = value && value.split(" ")[1];
//     var decoded = jwt.verify(token, SECRET_KEY);
//     res.json(decoded);
// })
// const pswd = "Student123@";
// const username = "John"

// const SECRET_KEY = "qwertyupoiuytrewq";

// app.post('/login', (req, res)=>{
//     const user = {
//         name: username,
//         pswd : pswd
//     }
//     const value = jwt.sign(user, SECRET_KEY);
//     res.send(value)
// })