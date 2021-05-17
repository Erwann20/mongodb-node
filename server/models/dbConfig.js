const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(
  config.get('mongoURI'),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
)