const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { userRoutes } = require('./server/routes');
const { authRoutes } = require('./server/routes');

const db = require("./server/models");
// Set up the express app
const app = express();
app.use(cors());
// Log requests to the console.
app.use(logger('dev'));

const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
	console.log('Drop and Resync Db');
	initial();
});

const initial = () => {
	Role.create({
		id: 1,
		name: 'user'
	});

	Role.create({
		id: 2,
		name: 'moderator'
	});

	Role.create({
		id: 3,
		name: 'admin'
	});
};

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importing all possible routes
app.use(authRoutes);
app.use(userRoutes);
// Setup a default catch-all route that sends back a welcome message in JSON format.

// app.get('*', (req, res) =>
// 	res.status(200).send({
// 		message: 'Welcome to the beginning of nothingness.'
// 	})
// );

module.exports = app;
