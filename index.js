const express = require('express');
const app = express();
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    require('dotenv').config();
}

const port = process.env.PORT;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
