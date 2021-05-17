const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationsModel = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true,
      default: "black"
    },
    backgroundColor: {
      type: String,
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
    collection: "applications"
  }
);

module.exports = mongoose.model("Application", ApplicationsModel);