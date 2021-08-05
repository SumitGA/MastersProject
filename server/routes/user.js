const express = require('express');
const router = express.Router();

router.get('/api/users', (req, res) => {
	res.status(200).send({ users: [] });
});

router.post('/api/auth/user', (req, res) => {
  res.status(201).send({message: 'User created successfully'});
})

module.exports = router;
