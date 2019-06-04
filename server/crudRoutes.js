const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbModels = require('../db/crudOperations.js');

const app = express();
const port = 3883;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/dist')));

// Get all homes
app.get('/MoreHomes', (req, res) => {
  dbModels.getAll((err, data) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(200).send(data);
    }
  });
});

// Get home by id
app.get('/MoreHomes/:id', (req, res) => {
  dbModels.getById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(200).send(data);
    }
  });
});

// Post a new home
app.post('/MoreHomes', (req, res) => {
  dbModels.addHome(req.body, (err) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(201).send();
    }
  });
});

// Update a home by id
app.put('/MoreHomes/:id', (req, res) => {
  dbModels.updateHome(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(204).send();
    }
  });
});

// Delete a home by id
app.delete('/MoreHomes/:id', (req, res) => {
  dbModels.deleteHome(req.params.id, (err) => {
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
