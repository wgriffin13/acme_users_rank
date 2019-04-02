const Sequelize = require('sequelize');
const router = require('express').Router();
const { User } = require('../db/index');

router.get('/users', (req, res, next) => {
    User.findAll()
        .then(data => res.send(data))
})



module.exports = router;
