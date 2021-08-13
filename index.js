const express = require('express');
const massive = require('massive');
require('dotenv').config();

const app = express();

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

app.use(epress.json());


app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));
  