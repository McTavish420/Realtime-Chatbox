const mongoose = require('mongoose');
const _ = require('lodash');

let RoomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20,
        trim: true,
        unique: true
    },
    admin: {
        adminID: {
            type: String,
            required: true,
            trim: true
        },
        adminName: {
            type: String,
            required: true,
            trim: true
        },
        adminEmail: {
            type: String,
            trim: true,
            required: true
        }
    },
    members: [{
        userName: {
            type: String,
            required: true,
            trim: true
        },
        userEmail: {
            type: String,
            trim: true,
            required: true
        }
    }],
    messages: [{
        from: {
            _id: {
                type: String,
                required: true,
                trim: true
            },
            userName: {
                type: String,
                required: true,
                trim: true
            },
            userEmail: {
                type: String,
                trim: true,
                required: true
            }
        },
        text: {
            type: String,
            require: true,
            trim: true
        },
        createdAt: {
            type: String,
            required: true
        }
    }]
});

// custom instance method from mongoose


// custom static methods from mongoose


// mongoose 'pre' middleware


let Room = mongoose.model('Room', RoomSchema);

module.exports = { Room };