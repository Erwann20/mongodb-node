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
        contacts: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contact',
            required: true,
        },
        date: {
            type: Date,
            default: Date.now
        }
    }, {
        timestamps: true,
        collection: 'users'
    }
);

module.exports = mongoose.model('User', UsersModel);

