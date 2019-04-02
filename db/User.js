const Sequelize = require('sequelize');
const conn = require('./conn');

const User = conn.define('user', {
    name: Sequelize.STRING,
    bio: Sequelize.TEXT,
    rank: Sequelize.INTEGER
})

module.exports = User
