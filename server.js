const express = require('express'); // Importing express
const app = express(); // Creating an express app

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');


// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.js
const express = require(' express');
const app = express();

// Include route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

// Use routes
app.use('/users', usersRoute);
app.use('products', productsRoute);


const port = process.env.PORT || 3000;

app.listen (port, () => {
  console.log('Server is running on port ${port}`);
});