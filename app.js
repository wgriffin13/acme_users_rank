const server = require('./server')
const {syncAndSeed} = require('./db/index')

const PORT = process.env.PORT || 3000
const host = '0.0.0.0';

syncAndSeed()
    .then(() => {
        server.listen(PORT, host, () => {
           console.log(`Server listening in port ${PORT}`);
        });
    })
