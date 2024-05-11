// app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./index.js');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

