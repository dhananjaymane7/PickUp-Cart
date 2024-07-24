


const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');


router.post('/login', (req, res) => {
  const { username, password ,role} = req.body;


  console.log(`Role: ${role}`);
  controller.authenticateUser(role, username, password, (err, data) => {
    if (err) {
      console.error('Error authenticating user:', err);
      res.status(500).json({ error: 'Error authenticating user' });
    } else if (data) {
      const authority = data.role || 'unknown';
      console.log(authority)
      res.status(200).json({   message: 'Login successful',    ...data, authority: [authority]      }); 
     
    } else {
      res.status(401).json({ error: 'Login failed' });
    }
  });
});

module.exports = router;
