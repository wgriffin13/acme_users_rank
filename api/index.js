const router = require('express').Router();
const { User } = require('../db/index');

router.put('/users/:id', (req, res, next) => {
    User.update(req.body,
        {
            where: {
                id: req.params.id
            },
            returning: true,
            plain: true
        })
        .then(([response, data]) => res.json(data.id))
        .catch(next)
})

router.post('/users', (req, res, next) => {
    User.create(req.body)
        .then(data => res.json(data))
        .catch(next)
})

router.delete('/users/:id', (req, res, next) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.sendStatus(204))
})


router.get('/users', (req, res, next) => {
    User.findAll()
        .then(data => res.send(data))
        .catch(next)
})

module.exports = router;
