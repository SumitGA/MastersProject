const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      roles: req.body.roles
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error))
  }
};