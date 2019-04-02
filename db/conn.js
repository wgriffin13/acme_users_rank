const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_users_rankDB', {
    logging: false
})

module.exports = conn
