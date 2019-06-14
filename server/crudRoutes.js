/* eslint-disable prefer-arrow-callback */
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbModels = require('../db/crudOperations.js');

const app = express();
const port = 3883;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/dist')));

// Get all homes
app.get('/rooms', (req, res) => {
  dbModels.getAll((err, data) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(200).send(data.rows);
    }
  });
});

// Get recommended homes for home with id
app.get('/rooms/:id', function getRoomsServer(req, res) {
  dbModels.getById(req.params.id, function getRoomsDb(err, data) {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(200).send(data.rows);
    }
  });
});

// Post a new home
app.post('/rooms/:id', (req, res) => {
  const data = [parseInt(req.params.id, 10), req.body.id];

  dbModels.addHome(data, (err) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(201).send();
    }
  });
});

// Update a home by id
app.put('/rooms/:id', (req, res) => {
  dbModels.updateHome(req.params.id, req.body.map(x => x.id), (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  });
});

// Delete a home by id
app.delete('/rooms/:id', (req, res) => {
  dbModels.deleteHome(parseInt(req.params.id, 10), req.body.id, (err) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(204).send();
    }
  });
});

app.get('/*', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
