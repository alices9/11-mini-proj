const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
// connect the array
const diagsArr = require('../db/diagnostics.json');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  res.status(201).send(diagsArr);
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  // deconstruct
  const { username, topic, tip } = req.body;
  //validate
  if (username && topic && tip) {
    const newTip = {
      username,
      topic,
      tip
    };
    diagsArr.push(newTip);
  }
});

module.exports = diagnostics;
