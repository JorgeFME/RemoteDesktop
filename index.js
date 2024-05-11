// /src/routes/index.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/post', (req, res) => {
  res.send('SUCCESS')
}) 
module.exports = router;

/*
sdfsdf
ss
dfsdfsdf
*/
