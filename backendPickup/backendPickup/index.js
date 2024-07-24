const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes')
const loginRoute = require('./routes/authRoutes')
const quickorderRoutes = require('./routes/quickOrderRoute')
const adminRoute = require('./routes/userRoutes')
const mysql = require('mysql2/promise'); 



const app = express();
const port = 7000;



app.use(cors({
  // origin: 'http://localhost:3002',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use(bodyParser.json());
app.use('/auth', loginRoute);
app.use('/admin' , adminRoute);
app.use('/order', orderRoutes);
app.use('/quickOrder', quickorderRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
