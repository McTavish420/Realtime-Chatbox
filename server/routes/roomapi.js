const express = require('express');
const _ = require('lodash');
const { Room } = require('../models/room');
const { authenticate } = require('../middleware/authentication');
const { ObjectID } = require('mongodb');


const router = express.Router();

// creating a new Chat Room

router.post('/create', authenticate, (req, res) => {
    let body = _.pick(req.body, ['roomName', 'members'])
    let admin = _.pick(req.user, ['_id', 'username', "email"])
    let room = new Room(body)
    room.admin.adminID = admin._id
    room.admin.adminName = admin.username
    room.admin.adminEmail = admin.email
    room.save().then((doc) => {
        console.log(`${room.roomName} room is successfully created!!`)
        res.status(200).send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

// joining or leaving a Chat room

router.patch('/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    let updateObject = req.body;

    Room.findByIdAndUpdate(id, { $set: updateObject }).then((info) => {
        if (!info) {
            return res.status(404).send();
        }
        res.send(info);
    }).catch((e) => {
        res.status(400).send();
    });
});

// get all room 

router.get('/', (req, res) => {
    Room.find().then((docs) => {
        res.status(200).send(docs)
    }).catch((err) => {
        res.status(400).send(err.message)
    })
})

// get a certain room 
router.get('/:id', (req, res) => {
    let id = req.params.id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Room.findById(id).then((doc) => {
        res.status(200).send(doc)
    }).catch((err) => {
        res.status(404).send(err.message)
    })
})

// Delete a Chat Room

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Room.findByIdAndRemove(id).then((info) => {
        if (!info) {
            return res.status(404).send();
        }
        res.status.send(info);
    }).catch((e) => {
        res.status(400).send();
    });
});

module.exports = router;