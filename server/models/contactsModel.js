const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactsModel = new Schema(
  {
    userOne: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      default: "black"
    },
    userTwo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      default: "white"
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    collection: "contacts"
  }
);

module.exports = mongoose.model("Contact", ContactsModel);