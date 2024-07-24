const db = require('../models/db');

// Create a new record

const createItem = ( username , AdminEmail ,password	 , role , callback) => {

  
  const sql = 'INSERT INTO user (username , AdminEmail ,password	 , role ) VALUES (?,?,?,?)';
  db.query(sql, [username , AdminEmail ,password	 , role 	], callback);
};





module.exports = {
  createItem,
};
