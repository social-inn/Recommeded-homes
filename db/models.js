const pgConnection = require('./index');

// Get 12 random homes
const getAll = (connection, callback) => {
  const query = 'SELECT * FROM homes ORDER BY RANDOM() LIMIT 12;';
  pgConnection.pool.query(query, (err, res) => {
    console.log(err, res);
  });

  // connection.query(query, (err, result) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, result);
  //   }
  // });
};

const addHouse = (connection, arr, callback) => {
  const query = 'INSERT INTO homes (img, house_type, location, description, cost_per_night, rating, votes) VALUES ?';
  connection.query(query, [arr], (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = {
  getAll,
  addHouse,
};
