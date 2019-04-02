const conn = require('./conn');
const User = require('./User');

const users = [
    {name: 'Lary', bio: 'Lary is tired', rank: 2},
    {name: 'Moe', bio: 'Moe is tall', rank: 1},
    {name: 'Curly', bio: 'Curly is funny', rank: 16}
]

const syncAndSeed = () => {
    return conn.sync({ force: true })
        .then(() => {
            return Promise.all([
                Promise.all(
                    users.map(item => User.create(item))
                )
            ])
        })
};

module.exports = {
    conn,
    syncAndSeed,
    User
}
