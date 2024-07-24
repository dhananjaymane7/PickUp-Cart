


const { queryAsync } = require('../models/db');
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

const authenticateUser = async (role, username, password, callback) => {
  const sql = `SELECT * FROM user WHERE username = ? AND password = ?`;

  try {
    const results = await queryAsync(sql, [username, password]);

    console.log('Results:', results);

    if (results.length === 1) {
      const data = results[0];
      const token = jwt.sign({ role, username }, secretKey, { expiresIn: '20h' });
      callback(null, { token, data ,role });
    } else {
      callback(null, null);
    }

    console.log('SQL Query: ', sql);
    console.log('Username: ', username);
    console.log('password: ', password);
  } catch (err) {
    console.error('Database query error:', err);
    callback(err, null);
  }
};

module.exports = {
  authenticateUser,
};
