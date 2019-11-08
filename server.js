// 1
const express = require('express');
// 2
const app = express();

const customers = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Brad', lastName: 'Traversy' },
  { id: 3, firstName: 'Mary', lastName: 'Swanson' }
];

const myMidd = (req, res, next) => {

  customers.push({id: 4, firstName: 'Asher', lastName: 'Adler'});

  console.log('TIME: ', Date.now());
  next();
};

app.use(myMidd);

// 3. GET route
app.get('/api/customers', (req, res) => {
  // hardcoded data on server side

  // send data to client as JSON
  res.json(customers);
});

// set up for Heroku and local
const PORT = process.env.PORT || 5000;
//
app.listen(PORT, () => `Server running on port ${PORT}`);
