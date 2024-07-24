const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
// const middle = require("../middleware/che_sanchMiddleware")


router.post('/newAdmin', (req, res) => {
  const { username, AdminEmail, password } = req.body;

  console.log(req.body);
  const role = "Admin"

  controller.createItem(username, AdminEmail, password, role, (err, result) => {
    if (err) {
      console.error('Error creating record:', err);
      res.status(500).json({ error: 'Error creating record' });
    } else {
      console.log(res.status);

      res.status(201).json({ message: 'chet_sanch created successfully', id: result.insertId, username, role });
    }
  });
});




module.exports = router;
