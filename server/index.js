const express = require('express');
require('./models/dbConfig');
require('dotenv').config();
const applicationsRoutes = require('./routes/applicationsRouter');
const usersRoutes = require('./routes/usersRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.set('useFindAndModify', false);


app.use(bodyParser.json());
app.use(cors());

app.use('/applications', applicationsRoutes);
app.use('/auth', usersRoutes);

app.listen(5500, () => console.log('Server started: 5500'));