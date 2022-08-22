const express = require('express');
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');


const errorHandler = (error, req, res, next) => {
  console.log(error);
  res.status(500).json({message: error.message})
};

const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router());
app.use(errorHandler);


module.exports = app;
