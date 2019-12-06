const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const _ = require('lodash');
const moment = require('moment')


const { mongoose } = require('./db/mongoose');
const {genText} = require('./models/text');
const users = require('./routes/usersapi');
const rooms = require('./routes/roomapi')
const {Room} = require('./models/room')

const app = express();
const corsOptions = {
    exposedHeaders: 'x-auth',
};

let server = http.createServer(app);
let io = socketIO(server);

// middleware

app.use(bodyParser.json());
app.use(cors());
app.use(cors(corsOptions));

app.use('/users', users);
app.use('/rooms', rooms);
 

// socket.io configuration

io.on('connection', (socket) => {
    console.log(`New User Conncted`);
    socket.emit('connect')
    socket.on('newMessage', (data) => {
        let chat = {
            from: {
                _id: data.from._id,
                userName: data.from.userName,
                userEmail: data.from.userEmail
            },
            text: data.text,
            createdAt: moment(moment().valueOf()).format('h:mm a')
        }
        console.log(data)
        let roomID = data.roomID
        io.emit('newText', chat)
        Room.findById(roomID).then(doc => {
            if (doc.messages.length >= 30) {
                doc.messages.shift()
                doc.messages.push(chat)
            } else {
                doc.messages.push(chat)
            }
            doc.save().then(doc => {
                console.log(doc.messages.length)
            })
        }).catch(err => {
            console.log(err)
        })
    })
    // socket.emit('newText',  'Welcome to chatbox');
    socket.on('disconnect', () => {
        console.log('user got disconnected');
    });
    
});

// Handle Production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is successfully up on port ${port}`);
});