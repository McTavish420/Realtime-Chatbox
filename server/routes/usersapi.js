const express = require('express');
const _ = require('lodash');
const {User} = require('../models/user');
const {authenticate} = require('../middleware/authentication');

const router = express.Router();

// create a user
router.post('/create', (req, res) => {
    let body = _.pick(req.body, ['email', 'password', 'username']);
    let user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        console.log(`Sucessfully added user: `);
        console.log(user.username);
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        console.log('Fail to add the user!');
        res.status(400).send(e);
    });
});

// logging in a user

router.post('/login', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);    
    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            console.log(`${user.username} successfully logged in!`);
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send(e);
    });
});

// getting an user for checking purpose

// router.post('/room', (req, res) => {
//     console.log(`Sucessfully finds the user: `);
//     console.log(req.body.username);
//     console.log(req.body);
//     let body = _.pick(req.body, ['name', '_id', 'username']);
//     let newRoom = new Room();
//     newRoom.name = body.name;
//     newRoom.admin["adminUserID"] = body._id;
//     newRoom.admin["adminUser"] = body.username;
//     console.log(newRoom);
//     newRoom.save().then((res) => {
//         return newRoom.addMember(body._id, body.username);
//     }).then(() => {
//         res.send(`Successfully created a room named as: ${newRoom.name}`);
//     }).catch((err) => {
//         console.log(err);
//     });
// });


// logging out an user 

router.delete('/logout', authenticate, (req, res) => {
    // console.log('line 50', req);
    // console.log('line 51' , req.user);
    
    req.user.removeToken(req.token).then(() => {
        console.log(`${req.user.username} is successfully logged out!`);
        res.status(200).send();
    }).catch((e) => {
        res.status(400).send(e);
    });
});







module.exports = router;