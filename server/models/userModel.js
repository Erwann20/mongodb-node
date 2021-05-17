const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UsersModel = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        city: {
            type: String,
            required: true
        },
        birthday: {
            type: Date,
            required: true
        },
        sexe: {
            type: String,
            required: true
        },
    }, {
        timestamps: true,
        collection: 'users'
    }
);

module.exports = mongoose.model('User', UsersModel);

