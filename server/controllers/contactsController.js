
const Contact = require('../models/contactsModel');
const ObjectID = require('mongoose').Types.ObjectId;

exports.getContacts = (req, res) => {
  Contact.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
}

exports.addContact = (req, res) => {
  const newRecord = new Contact({
    userOne: req.body.currentId,
    userTwo: req.body.id,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
}

exports.deleteContact = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
    Application.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
}