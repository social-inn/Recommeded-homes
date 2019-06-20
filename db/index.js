const { Pool } = require('pg');

exports.pool = new Pool({
  host: '18.188.248.204',
  database: 'recommended_homes',
  user: 'postgres',
  password: 'new_password',
  port: 5432
});

exports.pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
});
