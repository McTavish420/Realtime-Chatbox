const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const _ = require('lodash');


const { mongoose } = require('./db/mongoose');
const {genText} = require('./models/text');
const users = require('./routes/usersapi');

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
 

// socket.io configuration

io.on('connection', (socket) => {
    console.log(`New User Conncted`);
    socket.emit('newText', genText('Admin', 'Welcome to chatbox'));

    socket.on('sendText', (newText) => {
        io.emit('newText', genText(newText.from, newText.text));
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