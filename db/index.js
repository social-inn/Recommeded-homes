const { Pool } = require('pg');

exports.pool = new Pool({
  host: 'localhost',
  database: 'recommended_homes',
  user: 'bill',
  port: 5432
});
