
const Application = require('../models/applicationsModel');
const ObjectID = require('mongoose').Types.ObjectId;

exports.getApplications = (req, res) => {
  Application.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
}

exports.addApplication = (req, res) => {
  const newRecord = new Application({
    name: req.body.name,
    url: req.body.url,
    color: req.body.color,
    backgroundColor : req.body.backgroundColor
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
}

exports.updateApplication = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const updateRecord = {
    name: req.body.name,
    url: req.body.url,
    color: req.body.color,
    backgroundColor : req.body.backgroundColor
  };

  Application.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
}

exports.deleteApplication = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
    Application.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
}