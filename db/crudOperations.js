/* eslint-disable prefer-arrow-callback */
// const connection = require('./conn.js');
const pgConnection = require('./index.js');

// Get 12 random homes
const getAll = (callback) => {
  const query = 'SELECT * FROM homes ORDER BY RANDOM() LIMIT 12;';
  pgConnection.pool.query(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

// Get home by id
const getById = (id, callback) => {
  const query = 'WITH x AS (SELECT recommendation_id FROM recommended WHERE recommended.home_id=$1) SELECT * FROM x INNER JOIN homes ON homes.id=x.recommendation_id;';
  pgConnection.pool.query(query, [id], function accessDB(err, result) {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

// Post home
const addHome = (data, callback) => {
  const query = 'INSERT INTO recommended(home_id, recommendation_id) VALUES($1, $2)';
  pgConnection.pool.query(query, data, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Put home by id
const updateHome = (id, data, callback) => {
  const query = 'DELETE FROM recommended WHERE home_id = $1';

  pgConnection.pool.query(query, [id], (err) => {
    if (err) {
      callback(err);
    } else {
      insertHomes(id, data, callback);
    }
  });
};

const insertHomes = (id, data, callback) => {
  const intId = parseInt(id, 10);
  const query = `INSERT INTO recommended (home_id, recommendation_id) (SELECT * FROM unnest(ARRAY[${new Array(data.length).fill(intId)}], ARRAY[${data}]));`;

  pgConnection.pool.query(query, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Delete home by id
const deleteHome = (homeId, recommendationId, callback) => {
  const query = 'DELETE FROM recommended WHERE home_id = $1 AND recommendation_id = $2';
  pgConnection.pool.query(query, [homeId, recommendationId], (err, results) => {
    if (err) {
      callback(err);
    } else {
      // console.log(results.rowCount, 'rows deleted');
      callback(null);
    }
  });
};

/* For mysql connection
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
*/

module.exports = {
  getAll,
  getById,
  addHome,
  updateHome,
  deleteHome
};
