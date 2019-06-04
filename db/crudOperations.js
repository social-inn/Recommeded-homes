const connection = require('./conn.js');

// Get all homes
const getAll = (callback) => {
  const query = 'SELECT * FROM homes ORDER BY RAND() LIMIT 12;';
  connection.query(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

// Get home by id
const getById = (id, callback) => {
  const query = `SELECT * FROM homes WHERE id = ?;`;
  connection.query(query, id, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

// Post home
const addHome = (data, callback) => {
  const query = 'INSERT INTO homes SET ?';
  connection.query(query, data, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Put home by id
const updateHome = (id, data, callback) => {
  // const query = 'UPDATE homes SET img=?, house_type=?, location=?, description=?, cost_per_night=?, rating=?, votes=? WHERE id=?';
  const query = 'UPDATE homes SET ? WHERE id =' + id;
  connection.query(query, data, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Delete home by id
const deleteHome = (id, callback) => {
  const query = 'DELETE FROM homes WHERE id = ?';
  const q = connection.query(query, id, (err, results, fields) => {
    if (err) {
      callback(err);
    } else {
      console.log('deleted ' + results.affectedRows + ' rows');
      callback(null);
    }
  });
  // console.log(q.sql)
};

module.exports = {
  getAll,
  getById,
  addHome,
  updateHome,
  deleteHome
};
