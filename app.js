const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { userRoutes } = require('./server/routes');

// Set up the express app
const app = express();
app.use(cors());
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importing all possible routes
app.use(userRoutes);
// Setup a default catch-all route that sends back a welcome message in JSON format.

app.all('*', (req, res) =>
	res.status(200).send({
		message: 'Welcome to the beginning of nothingness.'
	})
);

module.exports = app;
