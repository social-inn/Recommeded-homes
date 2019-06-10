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
      res.status(200).send(data.rows);
    }
  });
});

// Get recommended homes for home with id
app.get('/MoreHomes/:id', (req, res) => {
  dbModels.getById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(200).send(data.rows);
    }
  });
});

// Post a new home
app.post('/MoreHomes/:id', (req, res) => {
  const data = [parseInt(req.params.id, 10), req.body.id];
  console.log(data);

  dbModels.addHome(data, (err) => {
    if (err) {
      res.status(500).send('error');
    } else {
      res.status(201).send();
    }
  });
});

// // Update a home by id
// app.put('/MoreHomes/:id', (req, res) => {
//   dbModels.updateHome(req.params.id, req.body, (err) => {
//     if (err) {
//       res.status(500).send('error');
//     } else {
//       res.status(204).send();
//     }
//   });
// });

// // Delete a home by id
// app.delete('/MoreHomes/:id', (req, res) => {
//   dbModels.deleteHome(req.params.id, (err) => {
//     if (err) {
//       res.status(500).send('error');
//     } else {
//       res.status(204).send();
//     }
//   });
// });

app.get('/*', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
