

const mysql = require('mysql2');
const util = require('util');

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pickupskartsdb',
};

const pool = mysql.createPool(db);

const queryAsync = util.promisify(pool.query).bind(pool);

module.exports = { queryAsync };

