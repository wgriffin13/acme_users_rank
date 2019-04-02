const server = require('./server');
const { syncAndSeed } = require('./db/index')

const PORT = process.env.port || 3000

syncAndSeed()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        })
    })
