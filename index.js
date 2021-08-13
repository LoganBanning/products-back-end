const express = require('express');
const massive = require('massive');
require('dotenv').config();
const { getAll, getOne, update, create, deleteProduct } = require('./products_controller');

const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  }
})
.then((dbInstance) => {
  app.set('db', dbInstance);
})
.catch((error) => {
  console.log('DB connection problem', error);
})

app.get('/api/products', getAll);
app.get('/api/products/:id', getOne);
app.put('/api/products/:id', update);
app.post('/api/products', create);
app.delete('/api/products/:id', deleteProduct);


app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));
  